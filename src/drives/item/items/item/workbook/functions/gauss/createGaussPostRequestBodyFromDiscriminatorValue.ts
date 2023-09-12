import { deserializeIntoGaussPostRequestBody } from './deserializeIntoGaussPostRequestBody';
import { type GaussPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGaussPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGaussPostRequestBody;
}
