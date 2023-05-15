import {deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse} from './deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse';
import {DeviceManagementTroubleshootingEventCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse;
}
