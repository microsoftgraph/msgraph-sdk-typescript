import { type ApplyHoldPostRequestBody } from './applyHoldPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyHoldPostRequestBody(applyHoldPostRequestBody: ApplyHoldPostRequestBody | undefined = {} as ApplyHoldPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { applyHoldPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
