import { deserializeIntoApplyBottomPercentFilterPostRequestBody } from './deserializeIntoApplyBottomPercentFilterPostRequestBody';
import { type ApplyBottomPercentFilterPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplyBottomPercentFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyBottomPercentFilterPostRequestBody;
}
