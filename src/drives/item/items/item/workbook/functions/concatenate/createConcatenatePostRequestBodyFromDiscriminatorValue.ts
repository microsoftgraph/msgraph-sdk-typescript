import {ConcatenatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConcatenatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConcatenatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConcatenatePostRequestBody();
}
