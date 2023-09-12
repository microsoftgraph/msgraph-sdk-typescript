import { type ApplyBottomItemsFilterPostRequestBody } from './applyBottomItemsFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyBottomItemsFilterPostRequestBody(applyBottomItemsFilterPostRequestBody: ApplyBottomItemsFilterPostRequestBody | undefined = {} as ApplyBottomItemsFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "count": n => { applyBottomItemsFilterPostRequestBody.count = n.getNumberValue(); },
    }
}
