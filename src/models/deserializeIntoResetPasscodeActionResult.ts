import { deserializeIntoDeviceActionResult } from './deserializeIntoDeviceActionResult';
import { type ResetPasscodeActionResult } from './resetPasscodeActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoResetPasscodeActionResult(resetPasscodeActionResult: ResetPasscodeActionResult | undefined = {} as ResetPasscodeActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(resetPasscodeActionResult),
        "passcode": n => { resetPasscodeActionResult.passcode = n.getStringValue(); },
    }
}
