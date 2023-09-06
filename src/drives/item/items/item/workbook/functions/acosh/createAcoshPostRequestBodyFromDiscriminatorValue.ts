import { deserializeIntoAcoshPostRequestBody } from './deserializeIntoAcoshPostRequestBody';
import { type AcoshPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAcoshPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAcoshPostRequestBody;
}
