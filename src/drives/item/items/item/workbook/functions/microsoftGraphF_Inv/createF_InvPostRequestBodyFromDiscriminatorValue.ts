import {F_InvPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createF_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : F_InvPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new F_InvPostRequestBody();
}
