import {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {serializeSubjectSet} from './serializeSubjectSet';
import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageAssignmentRequestorSettings(accessPackageAssignmentRequestorSettings: AccessPackageAssignmentRequestorSettings | undefined = {} as AccessPackageAssignmentRequestorSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "allowCustomAssignmentSchedule": n => { accessPackageAssignmentRequestorSettings.allowCustomAssignmentSchedule = n.getBooleanValue(); },
        "enableOnBehalfRequestorsToAddAccess": n => { accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToAddAccess = n.getBooleanValue(); },
        "enableOnBehalfRequestorsToRemoveAccess": n => { accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToRemoveAccess = n.getBooleanValue(); },
        "enableOnBehalfRequestorsToUpdateAccess": n => { accessPackageAssignmentRequestorSettings.enableOnBehalfRequestorsToUpdateAccess = n.getBooleanValue(); },
        "enableTargetsToSelfAddAccess": n => { accessPackageAssignmentRequestorSettings.enableTargetsToSelfAddAccess = n.getBooleanValue(); },
        "enableTargetsToSelfRemoveAccess": n => { accessPackageAssignmentRequestorSettings.enableTargetsToSelfRemoveAccess = n.getBooleanValue(); },
        "enableTargetsToSelfUpdateAccess": n => { accessPackageAssignmentRequestorSettings.enableTargetsToSelfUpdateAccess = n.getBooleanValue(); },
        "@odata.type": n => { accessPackageAssignmentRequestorSettings.odataType = n.getStringValue(); },
        "onBehalfRequestors": n => { accessPackageAssignmentRequestorSettings.onBehalfRequestors = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
    }
}
