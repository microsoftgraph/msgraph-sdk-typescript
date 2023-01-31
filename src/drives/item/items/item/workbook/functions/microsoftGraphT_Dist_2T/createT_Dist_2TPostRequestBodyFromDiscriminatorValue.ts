import {T_Dist_2TPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_Dist_2TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : T_Dist_2TPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new T_Dist_2TPostRequestBody();
}
