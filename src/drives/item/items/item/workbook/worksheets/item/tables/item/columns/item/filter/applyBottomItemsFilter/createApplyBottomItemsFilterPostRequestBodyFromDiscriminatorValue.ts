import {deserializeIntoApplyBottomItemsFilterPostRequestBody} from './deserializeIntoApplyBottomItemsFilterPostRequestBody';
import {ApplyBottomItemsFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyBottomItemsFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyBottomItemsFilterPostRequestBody;
}
