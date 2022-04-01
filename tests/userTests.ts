import { graphServiceClient } from "./testClient";

import { assert } from "chai";

describe("TestGet", () => {


    it("should return a test", async () => {
        const messages = await graphServiceClient.usersById("813956a3-4a30-4596-914f-bfd86a657a09").messages.get();
        console.log(messages);
        assert.isDefined(messages?.value);
    });
});