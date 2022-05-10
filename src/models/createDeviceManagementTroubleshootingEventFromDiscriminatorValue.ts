import {DeviceManagementTroubleshootingEventImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementTroubleshootingEventImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementTroubleshootingEventImpl();
}
