import {deserializeIntoApplyBottomPercentFilterPostRequestBody} from './deserializeIntoApplyBottomPercentFilterPostRequestBody';
import {ApplyBottomPercentFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyBottomPercentFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyBottomPercentFilterPostRequestBody;
}
