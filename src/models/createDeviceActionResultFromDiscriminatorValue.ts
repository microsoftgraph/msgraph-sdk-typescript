import {DeleteUserFromSharedAppleDeviceActionResultImpl, DeviceActionResultImpl, LocateDeviceActionResultImpl, RemoteLockActionResultImpl, ResetPasscodeActionResultImpl, WindowsDefenderScanActionResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceActionResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deleteUserFromSharedAppleDeviceActionResult":
                    return new DeleteUserFromSharedAppleDeviceActionResultImpl();
                case "#microsoft.graph.locateDeviceActionResult":
                    return new LocateDeviceActionResultImpl();
                case "#microsoft.graph.remoteLockActionResult":
                    return new RemoteLockActionResultImpl();
                case "#microsoft.graph.resetPasscodeActionResult":
                    return new ResetPasscodeActionResultImpl();
                case "#microsoft.graph.windowsDefenderScanActionResult":
                    return new WindowsDefenderScanActionResultImpl();
            }
        }
    }
    return new DeviceActionResultImpl();
}
