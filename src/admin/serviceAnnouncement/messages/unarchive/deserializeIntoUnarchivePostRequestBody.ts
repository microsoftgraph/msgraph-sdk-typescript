import { type UnarchivePostRequestBody } from './unarchivePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnarchivePostRequestBody(unarchivePostRequestBody: UnarchivePostRequestBody | undefined = {} as UnarchivePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { unarchivePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
