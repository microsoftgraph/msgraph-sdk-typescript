import { deserializeIntoRotateBitLockerKeysDeviceActionResult } from './deserializeIntoRotateBitLockerKeysDeviceActionResult';
import { type RotateBitLockerKeysDeviceActionResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRotateBitLockerKeysDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRotateBitLockerKeysDeviceActionResult;
}
