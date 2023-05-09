import {deserializeIntoTypePostRequestBody} from './deserializeIntoTypePostRequestBody';
import {TypePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTypePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTypePostRequestBody;
}
