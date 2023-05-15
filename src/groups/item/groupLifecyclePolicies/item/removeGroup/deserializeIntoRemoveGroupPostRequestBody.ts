import {RemoveGroupPostRequestBody} from './removeGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveGroupPostRequestBody(removeGroupPostRequestBody: RemoveGroupPostRequestBody | undefined = {} as RemoveGroupPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupId": n => { removeGroupPostRequestBody.groupId = n.getStringValue(); },
    }
}
