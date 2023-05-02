import {deserializeIntoConcatenatePostRequestBody} from './deserializeIntoConcatenatePostRequestBody';
import {ConcatenatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConcatenatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConcatenatePostRequestBody;
}
