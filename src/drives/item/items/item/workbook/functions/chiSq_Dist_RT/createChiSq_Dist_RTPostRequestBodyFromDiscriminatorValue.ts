import {deserializeIntoChiSq_Dist_RTPostRequestBody} from './deserializeIntoChiSq_Dist_RTPostRequestBody';
import {ChiSq_Dist_RTPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChiSq_Dist_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChiSq_Dist_RTPostRequestBody;
}
