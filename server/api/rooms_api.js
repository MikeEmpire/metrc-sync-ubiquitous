const axios = require("axios");

const {
  encodeAuthKey,
  getAuthorization
} = require("../../helpers/encodeAuthKey");
const { METRC_URL, GROLENS_URL } = require("../../constants");
const { returnMETRCErr } = require("../../helpers/index");

exports.undoRoom = async (req, res, next) => {
  try {
    const { headers, params } = await encodeAuthKey(req);

    const grolens_log_url = `${GROLENS_URL}/apis/metrclogs/${req.query.boardId}`;
    const grolens_log_entries = await axios
      .get(grolens_log_url, {
        headers: { authorization: req.params.token }
      })
      .then(undoRoomRes => undoRoomRes.data);

    // console.log("grolens_log_entries", grolens_log_entries);

    const grolens_log_index = grolens_log_entries.findIndex(
      log =>
        (typeof log.objectId === "string"
          ? log.objectId
          : log.objectId.toString()) === req.params.id &&
        log.eventType === "CREATE_ROOM"
    );

    const grolens_log_entry = grolens_log_entries[grolens_log_index];

    const { _id, metrcId } = grolens_log_entry;
    
    // delete room from metrc
    await axios.delete(`${METRC_URL}/rooms/v1/${metrcId}`, {
      params,
      headers
    });

    // delete grolens log entry
    const grolens_log_url_to_delete = `${GROLENS_URL}/apis/metrclogs/${_id}`;
    const grolens_log_entry_to_delete = await axios
      .delete(grolens_log_url_to_delete, {
        headers: { authorization: req.params.token }
      })
      .then(entryToDeleteRes => entryToDeleteRes.data);

    // console.log(grolens_log_entry_to_delete);

    return res.status(200).send(grolens_log_entry_to_delete);
  } catch (err) {
    return next(err);
  }
};

exports.getRooms = async (req, res, next) => {
  try {
    const { headers, params } = await getAuthorization(req);

    const url = `${METRC_URL}/locations/v1/active`;

    const METRCRooms = await axios
      .get(url, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    return res.status(200).send({
      message: "METRC Rooms",
      rooms: METRCRooms
    });
  } catch (err) {
    return next(err);
  }
};

exports.getRoomTypes = async (req, res, next) => {
  try {
    const { headers, params } = await getAuthorization(req);

    const url = `${METRC_URL}/locations/v1/types`;

    const metrcRoomTypes = await axios
      .get(url, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    return res.status(200).send({
      message: "METRC Rooms",
      rooms: metrcRoomTypes
    });
  } catch (err) {
    return next(err);
  }
};

exports.addRooms = async (req, res, next) => {
  try {
    const { headers, params } = await getAuthorization(req);

    const rooms = req.body;

    const url = `${METRC_URL}/locations/v1/create`;

    const METRCRooms = await axios
      .post(url, rooms, {
        params,
        headers
      })
      .then(response => response.data)
      .catch(err => returnMETRCErr(err, res));

    if (METRCRooms === undefined) {
      return res.status(400).send({
        message: "Unable to sync rooms"
      });
    }
    return res.status(200).send({
      message: "Added Rooms to METRC",
      METRCRooms,
      rooms
    });
  } catch (err) {
    return next(err);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const { headers, params } = await getAuthorization(req);

    const updatedRoom = req.body;

    const url = `${METRC_URL}/locations/v1/update`;

    const updatedMessage = await axios
      .post(url, updatedRoom, {
        params,
        headers
      })
      .then(updatedRes => updatedRes.data)
      .catch(err => returnMETRCErr(err, res));

    if (updatedMessage !== '') {
      return res.status(400).send({
        message: `Unable to update ${updatedMessage.Name}`
      });
    } 
    return res.status(200).send({
      message: `Successfully updated ${updatedMessage.Name}`,
      updatedMessage,
    })
  } catch (err) {
    return next(err);
  }
};
