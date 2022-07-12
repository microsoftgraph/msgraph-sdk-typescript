import {ResetPasswordResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResetPasswordResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ResetPasswordResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResetPasswordResponseMember1();
}
