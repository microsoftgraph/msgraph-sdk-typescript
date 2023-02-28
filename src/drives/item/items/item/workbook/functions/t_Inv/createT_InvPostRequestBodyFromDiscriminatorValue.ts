import {T_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createT_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : T_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new T_InvPostRequestBody();
}
