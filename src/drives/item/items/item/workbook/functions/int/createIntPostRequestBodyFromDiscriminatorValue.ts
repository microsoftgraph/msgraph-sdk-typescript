import {deserializeIntoIntPostRequestBody} from './deserializeIntoIntPostRequestBody';
import {IntPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntPostRequestBody;
}
