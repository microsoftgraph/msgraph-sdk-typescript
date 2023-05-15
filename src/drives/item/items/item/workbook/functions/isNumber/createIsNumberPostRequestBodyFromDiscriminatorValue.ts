import {deserializeIntoIsNumberPostRequestBody} from './deserializeIntoIsNumberPostRequestBody';
import {IsNumberPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsNumberPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsNumberPostRequestBody;
}
