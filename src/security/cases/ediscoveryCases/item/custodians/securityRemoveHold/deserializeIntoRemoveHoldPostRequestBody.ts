import {RemoveHoldPostRequestBody} from './removeHoldPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveHoldPostRequestBody(removeHoldPostRequestBody: RemoveHoldPostRequestBody | undefined = {} as RemoveHoldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { removeHoldPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
