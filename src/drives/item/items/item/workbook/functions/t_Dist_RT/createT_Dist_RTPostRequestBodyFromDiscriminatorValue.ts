import {deserializeIntoT_Dist_RTPostRequestBody} from './deserializeIntoT_Dist_RTPostRequestBody';
import {T_Dist_RTPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_Dist_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoT_Dist_RTPostRequestBody;
}
