import {deserializeIntoExactPostRequestBody} from './deserializeIntoExactPostRequestBody';
import {ExactPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExactPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExactPostRequestBody;
}
