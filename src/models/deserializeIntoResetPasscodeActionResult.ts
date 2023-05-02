import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {ResetPasscodeActionResult} from './resetPasscodeActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResetPasscodeActionResult(resetPasscodeActionResult: ResetPasscodeActionResult | undefined = {} as ResetPasscodeActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(resetPasscodeActionResult),
        "passcode": n => { resetPasscodeActionResult.passcode = n.getStringValue(); },
    }
}
