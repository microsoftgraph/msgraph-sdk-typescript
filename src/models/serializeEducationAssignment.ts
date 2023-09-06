import { EducationAddedStudentAction } from './educationAddedStudentAction';
import { EducationAddToCalendarOptions } from './educationAddToCalendarOptions';
import { type EducationAssignment } from './educationAssignment';
import { type EducationAssignmentGradeType } from './educationAssignmentGradeType';
import { type EducationAssignmentRecipient } from './educationAssignmentRecipient';
import { type EducationAssignmentResource } from './educationAssignmentResource';
import { EducationAssignmentStatus } from './educationAssignmentStatus';
import { type EducationCategory } from './educationCategory';
import { type EducationItemBody } from './educationItemBody';
import { type EducationRubric } from './educationRubric';
import { type EducationSubmission } from './educationSubmission';
import { type IdentitySet } from './identitySet';
import { serializeEducationAssignmentGradeType } from './serializeEducationAssignmentGradeType';
import { serializeEducationAssignmentRecipient } from './serializeEducationAssignmentRecipient';
import { serializeEducationAssignmentResource } from './serializeEducationAssignmentResource';
import { serializeEducationCategory } from './serializeEducationCategory';
import { serializeEducationItemBody } from './serializeEducationItemBody';
import { serializeEducationRubric } from './serializeEducationRubric';
import { serializeEducationSubmission } from './serializeEducationSubmission';
import { serializeEntity } from './serializeEntity';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationAssignment(writer: SerializationWriter, educationAssignment: EducationAssignment | undefined = {} as EducationAssignment) : void {
        serializeEntity(writer, educationAssignment)
        writer.writeEnumValue<EducationAddedStudentAction>("addedStudentAction", educationAssignment.addedStudentAction);
        writer.writeEnumValue<EducationAddToCalendarOptions>("addToCalendarAction", educationAssignment.addToCalendarAction);
        writer.writeBooleanValue("allowLateSubmissions", educationAssignment.allowLateSubmissions);
        writer.writeBooleanValue("allowStudentsToAddResourcesToSubmission", educationAssignment.allowStudentsToAddResourcesToSubmission);
        writer.writeObjectValue<EducationAssignmentRecipient>("assignTo", educationAssignment.assignTo, serializeEducationAssignmentRecipient);
        writer.writeCollectionOfObjectValues<EducationCategory>("categories", educationAssignment.categories, serializeEducationCategory);
        writer.writeStringValue("classId", educationAssignment.classId);
        writer.writeDateValue("closeDateTime", educationAssignment.closeDateTime);
        writer.writeStringValue("displayName", educationAssignment.displayName);
        writer.writeDateValue("dueDateTime", educationAssignment.dueDateTime);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", educationAssignment.grading, serializeEducationAssignmentGradeType);
        writer.writeObjectValue<EducationItemBody>("instructions", educationAssignment.instructions, serializeEducationItemBody);
        writer.writeStringValue("notificationChannelUrl", educationAssignment.notificationChannelUrl);
        writer.writeCollectionOfObjectValues<EducationAssignmentResource>("resources", educationAssignment.resources, serializeEducationAssignmentResource);
        writer.writeObjectValue<EducationRubric>("rubric", educationAssignment.rubric, serializeEducationRubric);
        writer.writeCollectionOfObjectValues<EducationSubmission>("submissions", educationAssignment.submissions, serializeEducationSubmission);
}
