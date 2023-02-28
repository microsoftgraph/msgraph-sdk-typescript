import {ApplyTopItemsFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyTopItemsFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplyTopItemsFilterPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplyTopItemsFilterPostRequestBody();
}
