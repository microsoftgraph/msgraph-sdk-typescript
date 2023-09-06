import { deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse } from './deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import { type ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedDeviceMobileAppConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse;
}
