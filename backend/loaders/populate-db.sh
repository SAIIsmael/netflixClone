#!/usr/bin/env bash

mongoimport --db netflix_db --collection movies --file movies.json --jsonArray --drop
