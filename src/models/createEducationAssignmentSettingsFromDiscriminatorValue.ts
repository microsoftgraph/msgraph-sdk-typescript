import {deserializeIntoEducationAssignmentSettings} from './deserializeIntoEducationAssignmentSettings';
import {EducationAssignmentSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentSettings;
}
