import {ApplyBottomItemsFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyBottomItemsFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyBottomItemsFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyBottomItemsFilterPostRequestBody();
}
