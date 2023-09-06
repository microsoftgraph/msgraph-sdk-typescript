import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type EducationAssignmentSettings } from './educationAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignmentSettings(educationAssignmentSettings: EducationAssignmentSettings | undefined = {} as EducationAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignmentSettings),
        "submissionAnimationDisabled": n => { educationAssignmentSettings.submissionAnimationDisabled = n.getBooleanValue(); },
    }
}
