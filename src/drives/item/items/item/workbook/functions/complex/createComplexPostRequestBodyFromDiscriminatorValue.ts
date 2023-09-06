import { deserializeIntoComplexPostRequestBody } from './deserializeIntoComplexPostRequestBody';
import { type ComplexPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createComplexPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoComplexPostRequestBody;
}
