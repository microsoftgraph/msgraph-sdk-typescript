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
import {serializeEntity} from './serializeEntity';
import {serializeGroup} from './serializeGroup';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationClass(writer: SerializationWriter, educationClass: EducationClass | undefined = {} as EducationClass) : void {
        serializeEntity(writer, educationClass)
        writer.writeCollectionOfObjectValues<EducationCategory>("assignmentCategories", educationClass.assignmentCategories, serializeEducationCategory);
        writer.writeObjectValue<EducationAssignmentDefaults>("assignmentDefaults", educationClass.assignmentDefaults, serializeEducationAssignmentDefaults);
        writer.writeCollectionOfObjectValues<EducationAssignment>("assignments", educationClass.assignments, serializeEducationAssignment);
        writer.writeObjectValue<EducationAssignmentSettings>("assignmentSettings", educationClass.assignmentSettings, serializeEducationAssignmentSettings);
        writer.writeStringValue("classCode", educationClass.classCode);
        writer.writeObjectValue<EducationCourse>("course", educationClass.course, serializeEducationCourse);
        writer.writeObjectValue<IdentitySet>("createdBy", educationClass.createdBy, serializeIdentitySet);
        writer.writeStringValue("description", educationClass.description);
        writer.writeStringValue("displayName", educationClass.displayName);
        writer.writeStringValue("externalId", educationClass.externalId);
        writer.writeStringValue("externalName", educationClass.externalName);
        writer.writeEnumValue<EducationExternalSource>("externalSource", educationClass.externalSource);
        writer.writeStringValue("externalSourceDetail", educationClass.externalSourceDetail);
        writer.writeStringValue("grade", educationClass.grade);
        writer.writeObjectValue<Group>("group", educationClass.group, serializeGroup);
        writer.writeStringValue("mailNickname", educationClass.mailNickname);
        writer.writeCollectionOfObjectValues<EducationUser>("members", educationClass.members, serializeEducationUser);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", educationClass.schools, serializeEducationSchool);
        writer.writeCollectionOfObjectValues<EducationUser>("teachers", educationClass.teachers, serializeEducationUser);
        writer.writeObjectValue<EducationTerm>("term", educationClass.term, serializeEducationTerm);
}
