import {createEducationAssignmentDefaultsFromDiscriminatorValue} from './createEducationAssignmentDefaultsFromDiscriminatorValue';
import {createEducationAssignmentFromDiscriminatorValue} from './createEducationAssignmentFromDiscriminatorValue';
import {createEducationAssignmentSettingsFromDiscriminatorValue} from './createEducationAssignmentSettingsFromDiscriminatorValue';
import {createEducationCategoryFromDiscriminatorValue} from './createEducationCategoryFromDiscriminatorValue';
import {createEducationCourseFromDiscriminatorValue} from './createEducationCourseFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationTermFromDiscriminatorValue} from './createEducationTermFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentDefaults} from './educationAssignmentDefaults';
import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {EducationCategory} from './educationCategory';
import {EducationClass} from './educationClass';
import {EducationCourse} from './educationCourse';
import {EducationExternalSource} from './educationExternalSource';
import {EducationSchool} from './educationSchool';
import {EducationTerm} from './educationTerm';
import {EducationUser} from './educationUser';
import {Group} from './group';
import {IdentitySet} from './identitySet';
import {serializeEducationAssignment} from './serializeEducationAssignment';
import {serializeEducationAssignmentDefaults} from './serializeEducationAssignmentDefaults';
import {serializeEducationAssignmentSettings} from './serializeEducationAssignmentSettings';
import {serializeEducationCategory} from './serializeEducationCategory';
import {serializeEducationCourse} from './serializeEducationCourse';
import {serializeEducationSchool} from './serializeEducationSchool';
import {serializeEducationTerm} from './serializeEducationTerm';
import {serializeEducationUser} from './serializeEducationUser';
import {serializeGroup} from './serializeGroup';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationClass(educationClass: EducationClass | undefined = {} as EducationClass) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationClass),
        "assignmentCategories": n => { educationClass.assignmentCategories = n.getCollectionOfObjectValues<EducationCategory>(createEducationCategoryFromDiscriminatorValue); },
        "assignmentDefaults": n => { educationClass.assignmentDefaults = n.getObjectValue<EducationAssignmentDefaults>(createEducationAssignmentDefaultsFromDiscriminatorValue); },
        "assignments": n => { educationClass.assignments = n.getCollectionOfObjectValues<EducationAssignment>(createEducationAssignmentFromDiscriminatorValue); },
        "assignmentSettings": n => { educationClass.assignmentSettings = n.getObjectValue<EducationAssignmentSettings>(createEducationAssignmentSettingsFromDiscriminatorValue); },
        "classCode": n => { educationClass.classCode = n.getStringValue(); },
        "course": n => { educationClass.course = n.getObjectValue<EducationCourse>(createEducationCourseFromDiscriminatorValue); },
        "createdBy": n => { educationClass.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "description": n => { educationClass.description = n.getStringValue(); },
        "displayName": n => { educationClass.displayName = n.getStringValue(); },
        "externalId": n => { educationClass.externalId = n.getStringValue(); },
        "externalName": n => { educationClass.externalName = n.getStringValue(); },
        "externalSource": n => { educationClass.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
        "externalSourceDetail": n => { educationClass.externalSourceDetail = n.getStringValue(); },
        "grade": n => { educationClass.grade = n.getStringValue(); },
        "group": n => { educationClass.group = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
        "mailNickname": n => { educationClass.mailNickname = n.getStringValue(); },
        "members": n => { educationClass.members = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
        "schools": n => { educationClass.schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
        "teachers": n => { educationClass.teachers = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
        "term": n => { educationClass.term = n.getObjectValue<EducationTerm>(createEducationTermFromDiscriminatorValue); },
    }
}
