import {deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from './deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import {ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse;
}
