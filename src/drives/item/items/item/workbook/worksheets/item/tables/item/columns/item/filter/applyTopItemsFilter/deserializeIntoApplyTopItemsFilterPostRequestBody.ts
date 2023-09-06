import { type ApplyTopItemsFilterPostRequestBody } from './applyTopItemsFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyTopItemsFilterPostRequestBody(applyTopItemsFilterPostRequestBody: ApplyTopItemsFilterPostRequestBody | undefined = {} as ApplyTopItemsFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "count": n => { applyTopItemsFilterPostRequestBody.count = n.getNumberValue(); },
    }
}
