import { deserializeIntoApplyTopItemsFilterPostRequestBody } from './deserializeIntoApplyTopItemsFilterPostRequestBody';
import { type ApplyTopItemsFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyTopItemsFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyTopItemsFilterPostRequestBody;
}
