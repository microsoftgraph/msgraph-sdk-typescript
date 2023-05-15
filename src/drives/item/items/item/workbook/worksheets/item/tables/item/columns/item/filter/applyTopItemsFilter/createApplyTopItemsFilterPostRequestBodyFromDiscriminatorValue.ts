import {deserializeIntoApplyTopItemsFilterPostRequestBody} from './deserializeIntoApplyTopItemsFilterPostRequestBody';
import {ApplyTopItemsFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyTopItemsFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyTopItemsFilterPostRequestBody;
}
