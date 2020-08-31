#! /bin/bash

mongoimport --db starwars --collection peoples --type json --file /docker/db.json