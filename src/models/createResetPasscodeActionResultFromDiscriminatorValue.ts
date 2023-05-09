import {deserializeIntoResetPasscodeActionResult} from './deserializeIntoResetPasscodeActionResult';
import {ResetPasscodeActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResetPasscodeActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResetPasscodeActionResult;
}
