import { graphServiceClient } from "./testClient";

async function test() {
const messages = await graphServiceClient.usersById("a4bf4e43-981f-430c-8024-cdb645f8c098").messages.get();

//const
}

test().then(() => {
    console.log("done");
});