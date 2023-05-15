import {deserializeIntoComplexPostRequestBody} from './deserializeIntoComplexPostRequestBody';
import {ComplexPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createComplexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplexPostRequestBody;
}
