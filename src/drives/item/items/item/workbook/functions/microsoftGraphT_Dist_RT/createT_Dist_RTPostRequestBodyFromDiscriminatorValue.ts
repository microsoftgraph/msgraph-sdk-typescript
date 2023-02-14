import {T_Dist_RTPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_Dist_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : T_Dist_RTPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new T_Dist_RTPostRequestBody();
}
