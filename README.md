# freest-api (WIP)

Feel FREE to practice RESTful API

# When to use freest-api?

If you are a Front-End Developer and you want to practice your skills and play around the latest Front End Frameworks in Javascripts or whatsoever but you do not have a REST API available, this is for you.

Oh yeah... did I already mentioned that this is for free? Yes, you're right, feel free to use and practice your Front End Skills (whatever) e.g. ReactJS, VueJS, AngularJS, etc.

![alt text](./freestapi.jpg 'Feel FREE to practice RESTful API')

# How it Works

## Create Record

```javascript
fetch('http://freestapi.nenjotsu.com/api/v1/rest/superhero', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    superHeroName: 'Son Goku',
    age: 28,
    mainPower: 'Kamehameha',
  }),
})
  .then(response => response.json())
  .then(response => {
    console.log('You saved this item', response);
  });
```

## Read Record

```javascript
// Get single record
fetch(
  'http://freestapi.nenjotsu.com/api/v1/rest/superhero/5d8e2acfdb140390a701e759',
)
  .then(response => response.json())
  .then(response => {
    console.log('My superhero is...', response);
  });

// Get all records
fetch('http://freestapi.nenjotsu.com/api/v1/rest/superhero')
  .then(response => response.json())
  .then(response => {
    console.log('So many superheroes', response);
  });
```

## Update Record

```javascript
fetch(
  'http://freestapi.nenjotsu.com/api/v1/rest/superhero/5d8e2acfdb140390a701e759',
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ superHeroName: 'One Punch Man', age: 24 }),
  },
).then(response => {
  console.log('Update superhero!', response.status);
});
```

## Delete Record

```javascript
fetch(
  'http://freestapi.nenjotsu.com/api/v1/rest/superhero/5d8e2acfdb140390a701e759',
  {
    method: 'DELETE',
  },
).then(response => {
  console.log('Goodbye my superhero!', response.status);
});
```

# How to Setup in Localhost (Development)

Pre-requisite

- MongoDB Installed
- Nodejs Installed

```bash
$ git clone https://github.com/nenjotsu/freest-api.git
# Setup your .env file, you can see the .env.sample for reference
$ npm i
$ npm run start:dev
```

# Terms of Use
