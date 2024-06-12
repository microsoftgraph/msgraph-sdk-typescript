import { assert } from "chai";

import { graphServiceClient } from "./testClient.js";

describe("TestGet", () => {
  it("should return list of users", async () => {
    const users = await graphServiceClient.users.get();
    assert.isDefined(users?.value);
    assert.isAtLeast(users?.value?.length ?? 0, 1);
  });

  it("should return messages for given user", async () => {
    const userId = process.env.USER_ID;
    if (!userId) {
      throw Error("Missing USER_ID environment variable");
    }
    const messages = await graphServiceClient.users
      .byUserId(userId)
      .messages.get();
    assert.isDefined(messages?.value);
  });
});
