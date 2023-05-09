import {deserializeIntoLenPostRequestBody} from './deserializeIntoLenPostRequestBody';
import {LenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLenPostRequestBody;
}
