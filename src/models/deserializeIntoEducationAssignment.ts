import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationAssignmentRecipientFromDiscriminatorValue} from './createEducationAssignmentRecipientFromDiscriminatorValue';
import {createEducationAssignmentResourceFromDiscriminatorValue} from './createEducationAssignmentResourceFromDiscriminatorValue';
import {createEducationCategoryFromDiscriminatorValue} from './createEducationCategoryFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createEducationRubricFromDiscriminatorValue} from './createEducationRubricFromDiscriminatorValue';
import {createEducationSubmissionFromDiscriminatorValue} from './createEducationSubmissionFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationAssignmentRecipient} from './educationAssignmentRecipient';
import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationAssignmentStatus} from './educationAssignmentStatus';
import {EducationCategory} from './educationCategory';
import {EducationItemBody} from './educationItemBody';
import {EducationRubric} from './educationRubric';
import {EducationSubmission} from './educationSubmission';
import {IdentitySet} from './identitySet';
import {serializeEducationAssignmentGradeType} from './serializeEducationAssignmentGradeType';
import {serializeEducationAssignmentRecipient} from './serializeEducationAssignmentRecipient';
import {serializeEducationAssignmentResource} from './serializeEducationAssignmentResource';
import {serializeEducationCategory} from './serializeEducationCategory';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeEducationRubric} from './serializeEducationRubric';
import {serializeEducationSubmission} from './serializeEducationSubmission';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationAssignment(educationAssignment: EducationAssignment | undefined = {} as EducationAssignment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationAssignment),
        "addedStudentAction": n => { educationAssignment.addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction); },
        "addToCalendarAction": n => { educationAssignment.addToCalendarAction = n.getEnumValue<EducationAddToCalendarOptions>(EducationAddToCalendarOptions); },
        "allowLateSubmissions": n => { educationAssignment.allowLateSubmissions = n.getBooleanValue(); },
        "allowStudentsToAddResourcesToSubmission": n => { educationAssignment.allowStudentsToAddResourcesToSubmission = n.getBooleanValue(); },
        "assignDateTime": n => { educationAssignment.assignDateTime = n.getDateValue(); },
        "assignedDateTime": n => { educationAssignment.assignedDateTime = n.getDateValue(); },
        "assignTo": n => { educationAssignment.assignTo = n.getObjectValue<EducationAssignmentRecipient>(createEducationAssignmentRecipientFromDiscriminatorValue); },
        "categories": n => { educationAssignment.categories = n.getCollectionOfObjectValues<EducationCategory>(createEducationCategoryFromDiscriminatorValue); },
        "classId": n => { educationAssignment.classId = n.getStringValue(); },
        "closeDateTime": n => { educationAssignment.closeDateTime = n.getDateValue(); },
        "createdBy": n => { educationAssignment.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { educationAssignment.createdDateTime = n.getDateValue(); },
        "displayName": n => { educationAssignment.displayName = n.getStringValue(); },
        "dueDateTime": n => { educationAssignment.dueDateTime = n.getDateValue(); },
        "feedbackResourcesFolderUrl": n => { educationAssignment.feedbackResourcesFolderUrl = n.getStringValue(); },
        "grading": n => { educationAssignment.grading = n.getObjectValue<EducationAssignmentGradeType>(createEducationAssignmentGradeTypeFromDiscriminatorValue); },
        "instructions": n => { educationAssignment.instructions = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        "lastModifiedBy": n => { educationAssignment.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { educationAssignment.lastModifiedDateTime = n.getDateValue(); },
        "notificationChannelUrl": n => { educationAssignment.notificationChannelUrl = n.getStringValue(); },
        "resources": n => { educationAssignment.resources = n.getCollectionOfObjectValues<EducationAssignmentResource>(createEducationAssignmentResourceFromDiscriminatorValue); },
        "resourcesFolderUrl": n => { educationAssignment.resourcesFolderUrl = n.getStringValue(); },
        "rubric": n => { educationAssignment.rubric = n.getObjectValue<EducationRubric>(createEducationRubricFromDiscriminatorValue); },
        "status": n => { educationAssignment.status = n.getEnumValue<EducationAssignmentStatus>(EducationAssignmentStatus); },
        "submissions": n => { educationAssignment.submissions = n.getCollectionOfObjectValues<EducationSubmission>(createEducationSubmissionFromDiscriminatorValue); },
        "webUrl": n => { educationAssignment.webUrl = n.getStringValue(); },
    }
}
