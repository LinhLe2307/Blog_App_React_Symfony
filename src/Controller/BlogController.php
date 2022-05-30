<?php

namespace App\Controller;

use App\Entity\BlogApp;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_main')]
class BlogController extends AbstractController
{
    #[Route('/blog', name: 'blog_index', methods: ['GET'])]
    public function index(EntityManagerInterface $em): Response
    {
        // fetch entities of a certain class
        $products = $em->getRepository(BlogApp::class)->findAll();
        $data = [];
        foreach($products as $product) {
            $data[] = [
                'id' => $product->getId(),
                'title' => $product->getTitle(),
                'description' => $product->getDescription(),
                'image' => $product->getImage(),
                'date' => $product->getDate()
            ];
        }
        return $this->json($data);
    }

    #[Route('/blog', name: 'blog_new', methods: ['POST'])]
    public function new(Request $request, ManagerRegistry $doctrine) {

        // saving objects to, and fetching objects from, the database
        $em = $doctrine->getManager();

        $project = new BlogApp();
        $project->setTitle($request->request->get('title'));
        $project->setDescription($request->request->get('description'));
        $project->setImage($request->request->get('image'));
        $project->setDate(new \DateTime());

        // tell Doctrine you want to (eventually) save the Product (no queries yet)
        $em->persist($project);

        // actually executes the queries (i.e. the INSERT query)
        $em->flush();

        return $this->json('Create new project successfully with id ' . $project->getId());
    }

    #[Route('/blog/{id}', name:'blog_show', methods: ['GET'])]
    public function show(int $id, ManagerRegistry $doctrine): Response
    {
        // look for a single Product by its primary key (usually "id")
        $project = $doctrine->getRepository(BlogApp::class)->find($id);
        if(!$project) {
            return $this->json("No project found id " . $id, 404);
        }
        $data = [
            'id' => $project->getId(),
            'title' => $project->getTitle(),
            'description' => $project->getDescription(),
            'image' => $project->getImage(),
            'date' => $project->getDate(),
        ];
        return $this->json($data);
    }

    #[Route("/blog/{id}", name: 'blog_edit', methods: ['PUT', 'PATCH'])]
    public function edit(Request $request, int $id, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $project= $em->getRepository(BlogApp::class)->find($id);
        if(!$project) {
            return $this->json("No project found for id " . $id, 404);
        }

        //  the raw data sent with the request body can be accessed using getContent()
        $content = json_decode($request->getContent());
        $project->setTitle($content->title);
        $project->setDescription($content->description);
        $project->setImage($content->image);
        // $project->setDate($content->date);
        $project->setDate(new \DateTime());
        $em->flush();

        $data = [
            'id' => $project->getId(),
            'title' => $project->getTitle(),
            'description' => $project->getDescription(),
            'image' => $project->getImage(),
            'date' => $project->getDate()
        ];
        return $this->json($data);
    }

    #[Route('/blog/{id}', name: 'blog_delete', methods: ['DELETE'])]
    public function delete(Request $request, int $id, ManagerRegistry $doctrine): Response 
    {
        $em = $doctrine->getManager();
        $project = $em ->getRepository(BlogApp::class)->find($id);
        if(!$project) {
            return $this->json("No project found for id " . $id, 404);
        }
        $em->remove($project);
        $em->flush();
        return $this->json('Delete a project successfully with id ' . $id);
    }
}