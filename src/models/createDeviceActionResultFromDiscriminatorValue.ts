import { deserializeIntoDeleteUserFromSharedAppleDeviceActionResult } from './deserializeIntoDeleteUserFromSharedAppleDeviceActionResult';
import { deserializeIntoDeviceActionResult } from './deserializeIntoDeviceActionResult';
import { deserializeIntoLocateDeviceActionResult } from './deserializeIntoLocateDeviceActionResult';
import { deserializeIntoRemoteLockActionResult } from './deserializeIntoRemoteLockActionResult';
import { deserializeIntoResetPasscodeActionResult } from './deserializeIntoResetPasscodeActionResult';
import { deserializeIntoWindowsDefenderScanActionResult } from './deserializeIntoWindowsDefenderScanActionResult';
import { type DeleteUserFromSharedAppleDeviceActionResult, type DeviceActionResult, type LocateDeviceActionResult, type RemoteLockActionResult, type ResetPasscodeActionResult, type WindowsDefenderScanActionResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deleteUserFromSharedAppleDeviceActionResult":
                    return deserializeIntoDeleteUserFromSharedAppleDeviceActionResult;
                case "#microsoft.graph.locateDeviceActionResult":
                    return deserializeIntoLocateDeviceActionResult;
                case "#microsoft.graph.remoteLockActionResult":
                    return deserializeIntoRemoteLockActionResult;
                case "#microsoft.graph.resetPasscodeActionResult":
                    return deserializeIntoResetPasscodeActionResult;
                case "#microsoft.graph.windowsDefenderScanActionResult":
                    return deserializeIntoWindowsDefenderScanActionResult;
            }
        }
    }
    return deserializeIntoDeviceActionResult;
}
