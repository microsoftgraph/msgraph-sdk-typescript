import {DeviceConfigurationAssignmentCollectionResponse} from './deviceConfigurationAssignmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationAssignmentCollectionResponse();
}
