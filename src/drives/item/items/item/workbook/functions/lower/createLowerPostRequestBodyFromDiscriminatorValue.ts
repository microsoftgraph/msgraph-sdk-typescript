import {deserializeIntoLowerPostRequestBody} from './deserializeIntoLowerPostRequestBody';
import {LowerPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLowerPostRequestBody;
}
