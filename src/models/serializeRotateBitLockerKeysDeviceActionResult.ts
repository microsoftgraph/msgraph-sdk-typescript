import { type RotateBitLockerKeysDeviceActionResult } from './rotateBitLockerKeysDeviceActionResult';
import { serializeDeviceActionResult } from './serializeDeviceActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRotateBitLockerKeysDeviceActionResult(writer: SerializationWriter, rotateBitLockerKeysDeviceActionResult: RotateBitLockerKeysDeviceActionResult | undefined = {} as RotateBitLockerKeysDeviceActionResult) : void {
        serializeDeviceActionResult(writer, rotateBitLockerKeysDeviceActionResult)
        writer.writeNumberValue("errorCode", rotateBitLockerKeysDeviceActionResult.errorCode);
}
