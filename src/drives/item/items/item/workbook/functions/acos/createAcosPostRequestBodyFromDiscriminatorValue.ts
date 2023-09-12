import { deserializeIntoAcosPostRequestBody } from './deserializeIntoAcosPostRequestBody';
import { type AcosPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAcosPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcosPostRequestBody;
}
