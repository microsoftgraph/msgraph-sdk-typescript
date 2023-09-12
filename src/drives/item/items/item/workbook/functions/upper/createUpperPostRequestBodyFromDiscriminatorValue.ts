import { deserializeIntoUpperPostRequestBody } from './deserializeIntoUpperPostRequestBody';
import { type UpperPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUpperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpperPostRequestBody;
}
