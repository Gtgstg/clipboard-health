const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given event", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '1' when given event with partition key", () => {
    const event  = {partitionKey : "1"}
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns a real key when given event no partition key", () => {
    const event  = {}
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });
});
