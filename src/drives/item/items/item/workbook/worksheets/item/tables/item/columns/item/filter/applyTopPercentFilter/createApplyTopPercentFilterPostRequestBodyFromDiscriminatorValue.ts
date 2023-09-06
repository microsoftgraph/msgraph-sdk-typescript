import { deserializeIntoApplyTopPercentFilterPostRequestBody } from './deserializeIntoApplyTopPercentFilterPostRequestBody';
import { type ApplyTopPercentFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyTopPercentFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyTopPercentFilterPostRequestBody;
}
