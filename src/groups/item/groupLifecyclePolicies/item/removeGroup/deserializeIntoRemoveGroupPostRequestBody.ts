import { type RemoveGroupPostRequestBody } from './removeGroupPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveGroupPostRequestBody(removeGroupPostRequestBody: RemoveGroupPostRequestBody | undefined = {} as RemoveGroupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { removeGroupPostRequestBody.groupId = n.getStringValue(); },
    }
}
