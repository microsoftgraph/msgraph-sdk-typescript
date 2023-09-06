import { type ResetPasscodeActionResult } from './resetPasscodeActionResult';
import { serializeDeviceActionResult } from './serializeDeviceActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeResetPasscodeActionResult(writer: SerializationWriter, resetPasscodeActionResult: ResetPasscodeActionResult | undefined = {} as ResetPasscodeActionResult) : void {
        serializeDeviceActionResult(writer, resetPasscodeActionResult)
        writer.writeStringValue("passcode", resetPasscodeActionResult.passcode);
}
