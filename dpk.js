const container = require("./di/index")
const constants = require('./lib/constants');
const crypto = container.resolve("crypto")

const processCandidateKey = (candidate) => {
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = constants.TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > constants.MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash(constants.SHA3_512).update(candidate).digest(constants.HEX);
  }
  return candidate;
};

exports.deterministicPartitionKey = (event) => {

  let candidate;

  if (event) {
    candidate = event.partitionKey ? event.partitionKey :
    crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }
  return processCandidateKey(candidate);
};