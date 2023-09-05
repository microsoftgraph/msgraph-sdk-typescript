import { type RemovePasswordPostRequestBody } from './removePasswordPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoRemovePasswordPostRequestBody(removePasswordPostRequestBody: RemovePasswordPostRequestBody | undefined = {} as RemovePasswordPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keyId": n => { removePasswordPostRequestBody.keyId = n.getGuidValue(); },
    }
}
