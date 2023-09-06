import { deserializeIntoProperPostRequestBody } from './deserializeIntoProperPostRequestBody';
import { type ProperPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProperPostRequestBody;
}
