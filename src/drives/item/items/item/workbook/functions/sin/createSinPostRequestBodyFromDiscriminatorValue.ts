import { deserializeIntoSinPostRequestBody } from './deserializeIntoSinPostRequestBody';
import { type SinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSinPostRequestBody;
}
