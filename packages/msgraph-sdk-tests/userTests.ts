import { assert } from "chai";

import { graphServiceClient } from "./testClient.js";

describe("TestGet", () => {
  it("should return list of users", async () => {
    const users = await graphServiceClient.users.get();
    assert.isDefined(users?.value);
    assert.isAtLeast(users?.value?.length ?? 0, 1);
  });

  it("should return messages for given user", async () => {
    const messages = await graphServiceClient.users
      .byUserId("a4bf4e43-981f-430c-8024-cdb645f8c098")
      .messages.get();
    assert.isDefined(messages?.value);
  });
});
