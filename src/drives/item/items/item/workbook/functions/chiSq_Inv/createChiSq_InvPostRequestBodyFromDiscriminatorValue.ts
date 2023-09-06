import { deserializeIntoChiSq_InvPostRequestBody } from './deserializeIntoChiSq_InvPostRequestBody';
import { type ChiSq_InvPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChiSq_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChiSq_InvPostRequestBody;
}
