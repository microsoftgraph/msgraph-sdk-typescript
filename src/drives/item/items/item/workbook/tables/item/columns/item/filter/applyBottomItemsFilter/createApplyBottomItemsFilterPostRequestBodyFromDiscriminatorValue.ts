import { deserializeIntoApplyBottomItemsFilterPostRequestBody } from './deserializeIntoApplyBottomItemsFilterPostRequestBody';
import { type ApplyBottomItemsFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyBottomItemsFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyBottomItemsFilterPostRequestBody;
}
