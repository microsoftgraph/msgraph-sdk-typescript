import { deserializeIntoNpvPostRequestBody } from './deserializeIntoNpvPostRequestBody';
import { type NpvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNpvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNpvPostRequestBody;
}
