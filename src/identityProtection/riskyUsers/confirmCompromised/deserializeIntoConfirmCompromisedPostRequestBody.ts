import { type ConfirmCompromisedPostRequestBody } from './confirmCompromisedPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConfirmCompromisedPostRequestBody(confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {} as ConfirmCompromisedPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "userIds": n => { confirmCompromisedPostRequestBody.userIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
