import { deserializeIntoXnpvPostRequestBody } from './deserializeIntoXnpvPostRequestBody';
import { type XnpvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createXnpvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoXnpvPostRequestBody;
}
