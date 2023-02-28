import {F_Inv_RTPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createF_Inv_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : F_Inv_RTPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new F_Inv_RTPostRequestBody();
}
