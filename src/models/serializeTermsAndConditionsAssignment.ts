import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {serializeDeviceAndAppManagementAssignmentTarget} from './serializeDeviceAndAppManagementAssignmentTarget';
import {serializeEntity} from './serializeEntity';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAssignment(writer: SerializationWriter, termsAndConditionsAssignment: TermsAndConditionsAssignment | undefined = {} as TermsAndConditionsAssignment) : void {
        serializeEntity(writer, termsAndConditionsAssignment)
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", termsAndConditionsAssignment.target, serializeDeviceAndAppManagementAssignmentTarget);
}
