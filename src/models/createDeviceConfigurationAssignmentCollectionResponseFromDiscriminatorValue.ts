import {DeviceConfigurationAssignmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationAssignmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationAssignmentCollectionResponseImpl();
}
