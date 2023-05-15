import {deserializeIntoApplyCustomFilterPostRequestBody} from './deserializeIntoApplyCustomFilterPostRequestBody';
import {ApplyCustomFilterPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyCustomFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyCustomFilterPostRequestBody;
}
