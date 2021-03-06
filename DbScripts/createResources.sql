CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE resources(
	id uuid DEFAULT uuid_generate_v4() NOT NULL,
	name VARCHAR (50) NOT NULL,
    resource_url VARCHAR (255) NOT NULL,
    cover_url VARCHAR (255),
    video BOOLEAN NOT NULL,
    type VARCHAR (50) NOT NULL,
	created_at TIMESTAMP NOT NULL,
    CONSTRAINT pkey_tbl PRIMARY KEY ( id )
);

INSERT INTO resources (name, resource_url, cover_url, video, type, created_at)
VALUES ( 
'Kubernetes', 
'https://kubernetes.io/', 
'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png',
false,
'infrastructure',
current_timestamp),
 ( 
'Terraform', 
'https://www.terraform.io/docs/commands/plan.html', 
'https://www.terraform.io/assets/images/og-image-large-e60c82fe.png',
false,
'infrastructure',
current_timestamp),
(
'Vault',
'https://www.vaultproject.io/',
'https://amazicworld.com/wp-content/uploads/2019/11/232-2321777_vault-logo-hashicorp-vault-icon-696x527.jpg',
false,
'infrastructure',
current_timestamp),
(
'AWS',
'https://aws.amazon.com/',
'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112012/amazon.com_web_services.png?itok=58la_TK3',
false,
'infrastructure',
current_timestamp),
(
'React JS',
'https://reactjs.org/',
'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
false,
'frontend',
current_timestamp),
(
'Vue JS',
'https://vuejs.org/',
'https://banner2.cleanpng.com/20180718/cbh/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1bc45884.1915769815318871318042.jpg',
false,
'frontend',
current_timestamp),
(
'Angular JS',
'https://angularjs.org/',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbjF88AO04b3eZ9NC3bs8LJ0oYexywNlhR9-OvA78s-p7bBcC1&usqp=CAU',
false,
'frontend',
current_timestamp),
(
'Express JS',
'https://expressjs.com/',
'https://img.favpng.com/7/9/3/node-js-javascript-react-logo-express-js-png-favpng-GPD0rKMbRdWaq3cyiE1t3dSbw.jpg',
false,
'backend',
current_timestamp),
(
'Django',
'https://www.djangoproject.com/',
'https://www.djangoproject.com/m/img/logos/django-logo-negative.png',
false,
'backend',
current_timestamp),
(
'Laravel',
'https://laravel.com/',
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl0_8XuaHDMKBtPafMH6tTlj0WZMdSUMqiWHmTD1mlLQkHqBOu&usqp=CAU',
false,
'backend',
current_timestamp),
(
'Introduction to Kubernetes',
'https://www.youtube.com/watch?v=PH-2FfFD2PU',
null,
true,
'infrastructure',
current_timestamp),
(
'Introduction to Terraform',
'https://www.youtube.com/watch?v=h970ZBgKINg',
null,
true,
'infrastructure',
current_timestamp),
(
'Introduction to Vault',
'https://www.youtube.com/watch?v=VYfl-DpZ5wM',
null,
true,
'infrastructure',
current_timestamp),
(
'Introduction to AWS',
'https://www.youtube.com/watch?v=Z3SYDTMP3ME',
null,
true,
'infrastructure',
current_timestamp),
(
'Introduction to react JS',
'https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=emb_title',
null,
true,
'frontend',
current_timestamp),
(
'Introduction to Vue JS',
'https://www.youtube.com/watch?v=DsuTwV0jwaY',
null,
true,
'frontend',
current_timestamp),
(
'Introduction to Angular JS',
'https://www.youtube.com/watch?v=nO1ROKMjPqI',
null,
true,
'frontend',
current_timestamp),
(
'Introduction to express JS',
'https://www.youtube.com/watch?v=L72fhGm1tfE',
null,
true,
'backend',
current_timestamp),
(
'Introduction to django',
'https://www.youtube.com/watch?v=K74_bKyNDd4',
null,
true,
'backend',
current_timestamp),
(
'Introduction to laravel',
'https://www.youtube.com/watch?v=EU7PRmCpx-0',
null,
true,
'backend',
current_timestamp);

