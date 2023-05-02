import {deserializeIntoCountIfPostRequestBody} from './deserializeIntoCountIfPostRequestBody';
import {CountIfPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCountIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountIfPostRequestBody;
}
