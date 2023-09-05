import { type DeviceAndAppManagementAssignmentTarget } from './deviceAndAppManagementAssignmentTarget';
import { serializeDeviceAndAppManagementAssignmentTarget } from './serializeDeviceAndAppManagementAssignmentTarget';
import { serializeEntity } from './serializeEntity';
import { type TermsAndConditionsAssignment } from './termsAndConditionsAssignment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAssignment(writer: SerializationWriter, termsAndConditionsAssignment: TermsAndConditionsAssignment | undefined = {} as TermsAndConditionsAssignment) : void {
        serializeEntity(writer, termsAndConditionsAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", termsAndConditionsAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
