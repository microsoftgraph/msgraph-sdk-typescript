import { deserializeIntoFactPostRequestBody } from './deserializeIntoFactPostRequestBody';
import { type FactPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFactPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFactPostRequestBody;
}
