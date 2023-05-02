import {ApplyTopItemsFilterPostRequestBody} from './applyTopItemsFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyTopItemsFilterPostRequestBody(applyTopItemsFilterPostRequestBody: ApplyTopItemsFilterPostRequestBody | undefined = {} as ApplyTopItemsFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "count": n => { applyTopItemsFilterPostRequestBody.count = n.getNumberValue(); },
    }
}
