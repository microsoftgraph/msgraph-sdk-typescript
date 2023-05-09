import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {createMobileAppAssignmentSettingsFromDiscriminatorValue} from './createMobileAppAssignmentSettingsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {InstallIntent} from './installIntent';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeMobileAppAssignmentSettings} from './serializeMobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignment(mobileAppAssignment: MobileAppAssignment | undefined = {} as MobileAppAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppAssignment),
        "intent": n => { mobileAppAssignment.intent = n.getEnumValue<InstallIntent>(InstallIntent); },
        "settings": n => { mobileAppAssignment.settings = n.getObjectValue<MobileAppAssignmentSettings>(createMobileAppAssignmentSettingsFromDiscriminatorValue); },
        "target": n => { mobileAppAssignment.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
    }
}
