import {UnarchivePostRequestBody} from './unarchivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnarchivePostRequestBody(unarchivePostRequestBody: UnarchivePostRequestBody | undefined = {} as UnarchivePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "messageIds": n => { unarchivePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
