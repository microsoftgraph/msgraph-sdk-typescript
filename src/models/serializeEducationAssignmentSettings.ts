import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationAssignmentSettings(writer: SerializationWriter, educationAssignmentSettings: EducationAssignmentSettings | undefined = {} as EducationAssignmentSettings) : void {
        serializeEntity(writer, educationAssignmentSettings)
        writer.writeBooleanValue("submissionAnimationDisabled", educationAssignmentSettings.submissionAnimationDisabled);
}
