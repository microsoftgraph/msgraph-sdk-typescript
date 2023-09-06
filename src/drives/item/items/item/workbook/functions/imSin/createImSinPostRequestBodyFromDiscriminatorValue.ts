import { deserializeIntoImSinPostRequestBody } from './deserializeIntoImSinPostRequestBody';
import { type ImSinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImSinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSinPostRequestBody;
}
