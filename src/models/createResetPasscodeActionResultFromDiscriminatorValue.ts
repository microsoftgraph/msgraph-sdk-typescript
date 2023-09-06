import { deserializeIntoResetPasscodeActionResult } from './deserializeIntoResetPasscodeActionResult';
import { type ResetPasscodeActionResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResetPasscodeActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResetPasscodeActionResult;
}
