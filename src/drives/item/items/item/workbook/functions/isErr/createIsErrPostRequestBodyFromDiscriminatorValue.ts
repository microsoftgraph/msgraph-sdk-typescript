import {deserializeIntoIsErrPostRequestBody} from './deserializeIntoIsErrPostRequestBody';
import {IsErrPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsErrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsErrPostRequestBody;
}
