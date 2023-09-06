import { deserializeIntoAmorDegrcPostRequestBody } from './deserializeIntoAmorDegrcPostRequestBody';
import { type AmorDegrcPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAmorDegrcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAmorDegrcPostRequestBody;
}
