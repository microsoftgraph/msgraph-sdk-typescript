import { graphServiceClient } from "./testClient";

import { assert } from "chai";

describe("TestGet", () => {


    it("should return list of users", async () => {
        const users = await graphServiceClient.users.get();
        assert.isDefined(users?.value);
        assert.isAtLeast(users?.value?.length, 1);
    });

    it("should return messages for given user", async () => {
        const messages = await graphServiceClient.usersById("a4bf4e43-981f-430c-8024-cdb645f8c098").messages.get();
        console.log(messages);
        assert.isDefined(messages?.value);
    });
});