import {ApplyBottomItemsFilterPostRequestBody} from './applyBottomItemsFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyBottomItemsFilterPostRequestBody(applyBottomItemsFilterPostRequestBody: ApplyBottomItemsFilterPostRequestBody | undefined = {} as ApplyBottomItemsFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "count": n => { applyBottomItemsFilterPostRequestBody.count = n.getNumberValue(); },
    }
}
