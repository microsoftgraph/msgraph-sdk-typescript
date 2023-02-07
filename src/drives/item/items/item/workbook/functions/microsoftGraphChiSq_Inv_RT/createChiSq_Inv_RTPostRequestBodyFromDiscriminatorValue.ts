import {ChiSq_Inv_RTPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChiSq_Inv_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChiSq_Inv_RTPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChiSq_Inv_RTPostRequestBody();
}
