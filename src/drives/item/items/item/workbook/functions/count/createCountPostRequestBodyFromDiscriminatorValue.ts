import {deserializeIntoCountPostRequestBody} from './deserializeIntoCountPostRequestBody';
import {CountPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountPostRequestBody;
}
