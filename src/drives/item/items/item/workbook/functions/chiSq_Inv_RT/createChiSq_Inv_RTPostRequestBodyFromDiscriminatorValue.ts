import { deserializeIntoChiSq_Inv_RTPostRequestBody } from './deserializeIntoChiSq_Inv_RTPostRequestBody';
import { type ChiSq_Inv_RTPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChiSq_Inv_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChiSq_Inv_RTPostRequestBody;
}
