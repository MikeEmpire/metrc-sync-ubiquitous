#!/bin/sh

read -r -p 'Name of files: ' name_of_file
touch server/api/$name_of_file"_api".js
touch server/routes/$name_of_file.js

FILEPATH="\"../api/${name_of_file}_api"\"
EXPRESS='"express"'
AXIOS='"axios"'
RETURNMETRCERRPATH="\"../../helpers/index"\"
ENCODEAUTHKEYPATH="\"../../helpers/encodeAuthKey"\"
METRCURLPATH="\"../../constants"\"


#! Add text to route file

echo "const express = require(${EXPRESS});

const router = express.Router();

const ${name_of_file}_api = require(${FILEPATH});

module.exports = router " >> server/routes/$name_of_file.js


#! add text to the api file
echo "const axios = require(${AXIOS});

const { returnMETRCErr } = require(${RETURNMETRCERRPATH});

const { encodeAuthKey } = require(${ENCODEAUTHKEYPATH});

const { METRC_URL } = require(${METRCURLPATH});" >> server/api/$name_of_file"_api".js


echo "Created $name_of_file scaffold"
