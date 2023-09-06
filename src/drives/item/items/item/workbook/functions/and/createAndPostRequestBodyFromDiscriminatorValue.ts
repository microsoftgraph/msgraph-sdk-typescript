import { deserializeIntoAndPostRequestBody } from './deserializeIntoAndPostRequestBody';
import { type AndPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndPostRequestBody;
}
