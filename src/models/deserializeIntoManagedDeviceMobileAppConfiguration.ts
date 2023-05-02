import {createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './managedDeviceMobileAppConfigurationDeviceSummary';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from './serializeManagedDeviceMobileAppConfigurationAssignment';
import {serializeManagedDeviceMobileAppConfigurationDeviceStatus} from './serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import {serializeManagedDeviceMobileAppConfigurationDeviceSummary} from './serializeManagedDeviceMobileAppConfigurationDeviceSummary';
import {serializeManagedDeviceMobileAppConfigurationUserStatus} from './serializeManagedDeviceMobileAppConfigurationUserStatus';
import {serializeManagedDeviceMobileAppConfigurationUserSummary} from './serializeManagedDeviceMobileAppConfigurationUserSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceMobileAppConfiguration(managedDeviceMobileAppConfiguration: ManagedDeviceMobileAppConfiguration | undefined = {} as ManagedDeviceMobileAppConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceMobileAppConfiguration),
        "assignments": n => { managedDeviceMobileAppConfiguration.assignments = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>(createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue); },
        "createdDateTime": n => { managedDeviceMobileAppConfiguration.createdDateTime = n.getDateValue(); },
        "description": n => { managedDeviceMobileAppConfiguration.description = n.getStringValue(); },
        "deviceStatuses": n => { managedDeviceMobileAppConfiguration.deviceStatuses = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatus>(createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue); },
        "deviceStatusSummary": n => { managedDeviceMobileAppConfiguration.deviceStatusSummary = n.getObjectValue<ManagedDeviceMobileAppConfigurationDeviceSummary>(createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue); },
        "displayName": n => { managedDeviceMobileAppConfiguration.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { managedDeviceMobileAppConfiguration.lastModifiedDateTime = n.getDateValue(); },
        "targetedMobileApps": n => { managedDeviceMobileAppConfiguration.targetedMobileApps = n.getCollectionOfPrimitiveValues<string>(); },
        "userStatuses": n => { managedDeviceMobileAppConfiguration.userStatuses = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatus>(createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue); },
        "userStatusSummary": n => { managedDeviceMobileAppConfiguration.userStatusSummary = n.getObjectValue<ManagedDeviceMobileAppConfigurationUserSummary>(createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue); },
        "version": n => { managedDeviceMobileAppConfiguration.version = n.getNumberValue(); },
    }
}
