# freest-api

Feel FREE to practice RESTful API

# When to use freest-api?

If you are a Front-End Developer and you want to practice your skills and play around the latest Front End Frameworks in Javascripts or whatsoever but you do not have a REST API available, this is for you.

Oh yeah... did I already mentioned that this is for free? Yes, you're right, feel free to use and practice your Front End Skills (whatever) e.g. ReactJS, VueJS, AngularJS, etc.

![alt text](./freestapi.jpg 'Feel FREE to practice RESTful API')

# How it Works

You can visit the swagger [http://54.255.174.15:911/swagger](http://54.251.135.247:5012/swagger)

You can visit the get all superheroes [http://54.255.174.15:911/api/v1/superhero/heroes](http://54.255.174.15:911/api/v1/superhero/heroes)

## Create Record

```javascript
fetch('http://54.255.174.15:911/api/v1/superhero/heroes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Batman',
    dateAppearance: '09/09/1986',
    place: 'Gotham city',
    powerStats: {
      intelligence: 34,
      strength: 23,
      speed: 45,
      durability: 23,
      power: 12,
      combat: 43,
    },
    appearance: {
      gender: 'male',
      race: 'Human',
      weight: [
        {
          lb: 110,
          kg: 54,
        },
      ],
    },
    aliases: ['dark knight'],
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
  'http://54.255.174.15:911/api/v1/superhero/heroes/5d8e2acfdb140390a701e759',
)
  .then(response => response.json())
  .then(response => {
    console.log('My superhero is...', response);
  });

// Get all records
fetch('http://54.251.135.247:5012/api/v1/superhero/heroes')
  .then(response => response.json())
  .then(response => {
    console.log('So many superheroes', response);
  });
```

## Update Record

```javascript
fetch(
  'http://54.255.174.15:911/api/v1/superhero/heroes/5d8e2acfdb140390a701e759',
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Superman',
      dateAppearance: '09/09/1986',
      place: 'Gotham city',
      powerStats: {
        intelligence: 34,
        strength: 23,
        speed: 45,
        durability: 23,
        power: 12,
        combat: 43,
      },
      appearance: {
        gender: 'male',
        race: 'Human',
        weight: [
          {
            lb: 110,
            kg: 54,
          },
        ],
      },
      aliases: ['dark knight'],
    }),
  },
).then(response => {
  console.log('Update superhero!', response.status);
});
```

## Delete Record

```javascript
fetch(
  'http://54.255.174.15:911/api/v1/superhero/heroes/5d8e2acfdb140390a701e759',
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

```bash
# start in production
$ pm2 start npm --no-automation --name freest -- run start:prod
# restart server
$ pm2 restart freest
```

# Terms of Use
- this is not for production of course, whatever data you enter we are not liable for any loss,
- feel free to add superheroes data

# Contribution
If you feel you want to contribute or any suggestion you have in mind please open an issue.

Follow me on github [@nenjotsu](https://github.com/nenjotsu)
