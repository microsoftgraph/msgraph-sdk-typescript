import { type EducationAssignmentSettings } from './educationAssignmentSettings';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentSettings(writer: SerializationWriter, educationAssignmentSettings: EducationAssignmentSettings | undefined = {} as EducationAssignmentSettings) : void {
        serializeEntity(writer, educationAssignmentSettings)
        writer.writeBooleanValue("submissionAnimationDisabled", educationAssignmentSettings.submissionAnimationDisabled);
}
