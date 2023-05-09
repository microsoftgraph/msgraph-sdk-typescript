import {deserializeIntoIsErrorPostRequestBody} from './deserializeIntoIsErrorPostRequestBody';
import {IsErrorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsErrorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsErrorPostRequestBody;
}
