import {ApplyHoldPostRequestBody} from './applyHoldPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyHoldPostRequestBody(applyHoldPostRequestBody: ApplyHoldPostRequestBody | undefined = {} as ApplyHoldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { applyHoldPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
