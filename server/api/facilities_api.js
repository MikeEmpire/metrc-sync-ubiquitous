const { METRC_URL } = require("../../constants");
const getAPICall = require("../../helpers/getAPICall");

exports.getFacilities = async (req, res, next) => {
    const url = `${METRC_URL}/facilities/v1`;
    return getAPICall(req, res, next, url)
}