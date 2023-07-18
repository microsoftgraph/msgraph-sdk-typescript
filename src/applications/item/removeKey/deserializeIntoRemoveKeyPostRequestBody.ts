import {RemoveKeyPostRequestBody} from './removeKeyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoRemoveKeyPostRequestBody(removeKeyPostRequestBody: RemoveKeyPostRequestBody | undefined = {} as RemoveKeyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keyId": n => { removeKeyPostRequestBody.keyId = n.getGuidValue(); },
        "proof": n => { removeKeyPostRequestBody.proof = n.getStringValue(); },
    }
}
