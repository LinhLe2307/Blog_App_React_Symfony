# Blog_App_React_Symfony
This is a school project where users can add new blog posts, edit or delete it.

# Steps to follow

1. Clone the folder to SymfonyMAMP and rename to "web". Then cd to "web"
2. Install dependencies using `composer install`
3. Install front-end dependencies using `npm install`
4. Create SQL database
   - Open file .env in "SYMFONY-MAMP" folder (not the "web" folder!)
   - Rename database to `DATABASE_NAME=BlogFullStack101 `.
6. Check PHPAdmin database: whether or not there is a database named "BlogFullStack101"
7. Go to Docker and use CLI in PORT:8007
   - `cd web`
   - run `php bin/console make:migration` 
   - then run `php bin/console doctrine:migrations:migrate` to migrate the tables in the database
8. Run webpack encore using following command
   `npm run watch`
9. Visit URL: http://localhost:8007/ to see the app
10. Use Crtl + C to stop the watch

# Tech stack

1.  [Symfony](https://symfony.com/)
2.  [PHP](https://www.php.net/)
3.  [React.js](https://reactjs.org/)
4.  [React router](https://reactrouter.com/)
5.  [MySQL](https://www.mysql.com)
6.  [SymfonyMAMP](https://github.com/kalwar/Symfony-MAMP)
