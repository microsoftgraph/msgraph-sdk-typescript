import {deserializeIntoRightPostRequestBody} from './deserializeIntoRightPostRequestBody';
import {RightPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRightPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRightPostRequestBody;
}
