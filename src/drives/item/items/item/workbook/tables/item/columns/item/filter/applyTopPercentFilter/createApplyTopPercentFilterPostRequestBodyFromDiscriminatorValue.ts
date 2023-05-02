import {deserializeIntoApplyTopPercentFilterPostRequestBody} from './deserializeIntoApplyTopPercentFilterPostRequestBody';
import {ApplyTopPercentFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyTopPercentFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyTopPercentFilterPostRequestBody;
}
