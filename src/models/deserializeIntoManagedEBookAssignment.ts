import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {InstallIntent} from './installIntent';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBookAssignment(managedEBookAssignment: ManagedEBookAssignment | undefined = {} as ManagedEBookAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedEBookAssignment),
        "installIntent": n => { managedEBookAssignment.installIntent = n.getEnumValue<InstallIntent>(InstallIntent); },
        "target": n => { managedEBookAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
