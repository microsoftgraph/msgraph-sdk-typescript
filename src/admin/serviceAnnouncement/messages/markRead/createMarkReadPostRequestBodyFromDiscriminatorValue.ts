import { deserializeIntoMarkReadPostRequestBody } from './deserializeIntoMarkReadPostRequestBody';
import { type MarkReadPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMarkReadPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkReadPostRequestBody;
}
