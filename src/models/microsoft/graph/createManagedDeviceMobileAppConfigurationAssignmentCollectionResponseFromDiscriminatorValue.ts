import {ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from './managedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse();
}
