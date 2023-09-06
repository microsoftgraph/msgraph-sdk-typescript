import { type RemoveHoldPostRequestBody } from './removeHoldPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveHoldPostRequestBody(removeHoldPostRequestBody: RemoveHoldPostRequestBody | undefined = {} as RemoveHoldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { removeHoldPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
