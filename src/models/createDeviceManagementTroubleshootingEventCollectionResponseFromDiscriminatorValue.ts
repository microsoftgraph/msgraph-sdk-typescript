import {DeviceManagementTroubleshootingEventCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementTroubleshootingEventCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceManagementTroubleshootingEventCollectionResponseImpl();
}
