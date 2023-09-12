import { deserializeIntoDeviceActionResult } from './deserializeIntoDeviceActionResult';
import { type RotateBitLockerKeysDeviceActionResult } from './rotateBitLockerKeysDeviceActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRotateBitLockerKeysDeviceActionResult(rotateBitLockerKeysDeviceActionResult: RotateBitLockerKeysDeviceActionResult | undefined = {} as RotateBitLockerKeysDeviceActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(rotateBitLockerKeysDeviceActionResult),
        "errorCode": n => { rotateBitLockerKeysDeviceActionResult.errorCode = n.getNumberValue(); },
    }
}
