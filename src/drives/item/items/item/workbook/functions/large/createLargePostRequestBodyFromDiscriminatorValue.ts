import { deserializeIntoLargePostRequestBody } from './deserializeIntoLargePostRequestBody';
import { type LargePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLargePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLargePostRequestBody;
}
