import { graphServiceClient } from "./testClient";

import { assert } from "chai";
import { UsersRequestBuilderGetRequestConfiguration } from "../src/users/usersRequestBuilderGetRequestConfiguration";
import { UsersRequestBuilderGetQueryParameters } from "../src/users/usersRequestBuilderGetQueryParameters";

describe("TestGet", () => {


    it("should return list of users", async () => {

        const users = await graphServiceClient.users.count.get({headers:{"ConsistencyLevel":"eventual"}});
  
        console.log(users);

        const s= await graphServiceClient.users.get()
        console.log(s.value);
    });

    it("should return messages for given user", async () => {
        const messages = await graphServiceClient.usersById("a4bf4e43-981f-430c-8024-cdb645f8c098").messages.post({subject: "test", additionalData: {}});
        assert.isDefined(messages);
    });
});