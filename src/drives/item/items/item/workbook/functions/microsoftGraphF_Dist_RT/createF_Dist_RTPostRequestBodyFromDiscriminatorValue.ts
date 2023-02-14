import {F_Dist_RTPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createF_Dist_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : F_Dist_RTPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new F_Dist_RTPostRequestBody();
}
