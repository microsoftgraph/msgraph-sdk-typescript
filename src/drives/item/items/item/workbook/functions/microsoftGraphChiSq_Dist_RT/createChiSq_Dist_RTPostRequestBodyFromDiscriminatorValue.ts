import {ChiSq_Dist_RTPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChiSq_Dist_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChiSq_Dist_RTPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChiSq_Dist_RTPostRequestBody();
}
