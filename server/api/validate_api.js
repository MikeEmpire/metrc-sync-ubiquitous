const axios = require("axios");
const { encodeAuthKey } = require("../../helpers/encodeAuthKey");
const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");

exports.validateMETRCInfo = async (req, res, next) => {
    const url = `${METRC_URL(req)}/strains/v1/active`;
    return getAPICall(req, res, next, url);
};
