import {deserializeIntoActivatePostRequestBody} from './deserializeIntoActivatePostRequestBody';
import {ActivatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivatePostRequestBody;
}
