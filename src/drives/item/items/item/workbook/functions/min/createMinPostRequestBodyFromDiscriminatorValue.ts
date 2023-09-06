import { deserializeIntoMinPostRequestBody } from './deserializeIntoMinPostRequestBody';
import { type MinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMinPostRequestBody;
}
