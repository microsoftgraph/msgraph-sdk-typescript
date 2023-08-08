import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {createMobileAppAssignmentSettingsFromDiscriminatorValue} from './createMobileAppAssignmentSettingsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {InstallIntent} from './installIntent';
import type {MobileAppAssignment} from './mobileAppAssignment';
import type {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignment(mobileAppAssignment: MobileAppAssignment | undefined = {} as MobileAppAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppAssignment),
        "intent": n => { mobileAppAssignment.intent = n.getEnumValue<InstallIntent>(InstallIntent); },
        "settings": n => { mobileAppAssignment.settings = n.getObjectValue<MobileAppAssignmentSettings>(createMobileAppAssignmentSettingsFromDiscriminatorValue); },
        "target": n => { mobileAppAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
