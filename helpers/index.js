const returnMETRCErr = async (err, res) => {
  const { data, status } = err.response;
  console.log(err.response);
  // console.log(data, status)

  if (status === 401) {
    return res.status(status).send({
      message:
        "Incorrect License Number or METRC Key, or that facility might not have authorization for the data to go through, please check on your API information!",
    });
  }
  if (data === "") {
    return res
      .status(status)
      .send({ message: "Unable to complete your request" });
  }
  if (data.Message && data.Message !== "") {
    return res.status(status).send({
      message: data.Message,
    });
  }
  if (data) {
    if (Array.isArray(data)) {
      let message = "Error Message from METRC: ";
      // console.log(message)
      await data.forEach(async (errRes) => (message += ` ${errRes.message}`));
      return res.status(status).send({
        message,
      });
    }
  }
  return res.status(status).send({
    message: data[0].message,
  });
};

module.exports = {
  returnMETRCErr,
};
