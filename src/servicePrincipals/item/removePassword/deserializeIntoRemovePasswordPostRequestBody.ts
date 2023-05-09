import {RemovePasswordPostRequestBody} from './removePasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemovePasswordPostRequestBody(removePasswordPostRequestBody: RemovePasswordPostRequestBody | undefined = {} as RemovePasswordPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keyId": n => { removePasswordPostRequestBody.keyId = n.getStringValue(); },
    }
}
