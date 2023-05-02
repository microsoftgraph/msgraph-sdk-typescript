import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentSettings(educationAssignmentSettings: EducationAssignmentSettings | undefined = {} as EducationAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignmentSettings),
        "submissionAnimationDisabled": n => { educationAssignmentSettings.submissionAnimationDisabled = n.getBooleanValue(); },
    }
}
