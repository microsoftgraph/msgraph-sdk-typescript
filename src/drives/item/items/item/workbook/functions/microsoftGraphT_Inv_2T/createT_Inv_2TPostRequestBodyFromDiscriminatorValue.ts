import {T_Inv_2TPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_Inv_2TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : T_Inv_2TPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new T_Inv_2TPostRequestBody();
}
