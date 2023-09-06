import { deserializeIntoHex2OctPostRequestBody } from './deserializeIntoHex2OctPostRequestBody';
import { type Hex2OctPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHex2OctPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHex2OctPostRequestBody;
}
