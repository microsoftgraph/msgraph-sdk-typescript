import {createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import type {ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse} from './managedDeviceMobileAppConfigurationAssignmentCollectionResponse';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from './serializeManagedDeviceMobileAppConfigurationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfigurationAssignmentCollectionResponse(managedDeviceMobileAppConfigurationAssignmentCollectionResponse: ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse | undefined = {} as ManagedDeviceMobileAppConfigurationAssignmentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedDeviceMobileAppConfigurationAssignmentCollectionResponse),
        "value": n => { managedDeviceMobileAppConfigurationAssignmentCollectionResponse.value = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>(createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue); },
    }
}
