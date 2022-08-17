import {DeleteUserFromSharedAppleDeviceActionResult, DeviceActionResult, LocateDeviceActionResult, RemoteLockActionResult, ResetPasscodeActionResult, WindowsDefenderScanActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceActionResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deleteUserFromSharedAppleDeviceActionResult":
                    return new DeleteUserFromSharedAppleDeviceActionResult();
                case "#microsoft.graph.locateDeviceActionResult":
                    return new LocateDeviceActionResult();
                case "#microsoft.graph.remoteLockActionResult":
                    return new RemoteLockActionResult();
                case "#microsoft.graph.resetPasscodeActionResult":
                    return new ResetPasscodeActionResult();
                case "#microsoft.graph.windowsDefenderScanActionResult":
                    return new WindowsDefenderScanActionResult();
            }
        }
    }
    return new DeviceActionResult();
}
