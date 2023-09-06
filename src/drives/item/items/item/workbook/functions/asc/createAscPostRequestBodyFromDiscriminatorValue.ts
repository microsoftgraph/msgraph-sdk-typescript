import { deserializeIntoAscPostRequestBody } from './deserializeIntoAscPostRequestBody';
import { type AscPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAscPostRequestBody;
}
