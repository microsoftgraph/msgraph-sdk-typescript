import {ResetPasscodeActionResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResetPasscodeActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResetPasscodeActionResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResetPasscodeActionResultImpl();
}
