import {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import {serializeSubjectSet} from './serializeSubjectSet';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestorSettings(writer: SerializationWriter, accessPackageAssignmentRequestorSettings: AccessPackageAssignmentRequestorSettings | undefined = {} as AccessPackageAssignmentRequestorSettings) : void {
        writer.writeBooleanValue("allowCustomAssignmentSchedule", accessPackageAssignmentRequestorSettings.allowCustomAssignmentSchedule);
        writer.writeBooleanValue("enableOnBehalfRequestorsToAddAccess", accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToAddAccess);
        writer.writeBooleanValue("enableOnBehalfRequestorsToRemoveAccess", accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToRemoveAccess);
        writer.writeBooleanValue("enableOnBehalfRequestorsToUpdateAccess", accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToUpdateAccess);
        writer.writeBooleanValue("enableTargetsToSelfAddAccess", accessPackageAssignmentRequestorSettings.enableTargetsToSelfAddAccess);
        writer.writeBooleanValue("enableTargetsToSelfRemoveAccess", accessPackageAssignmentRequestorSettings.enableTargetsToSelfRemoveAccess);
        writer.writeBooleanValue("enableTargetsToSelfUpdateAccess", accessPackageAssignmentRequestorSettings.enableTargetsToSelfUpdateAccess);
        writer.writeStringValue("@odata.type", accessPackageAssignmentRequestorSettings.odataType);
        writer.writeCollectionOfObjectValues<SubjectSet>("onBehalfRequestors", accessPackageAssignmentRequestorSettings.onBehalfRequestors, serializeSubjectSet);
        writer.writeAdditionalData(accessPackageAssignmentRequestorSettings.additionalData);
}
