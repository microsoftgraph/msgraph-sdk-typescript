import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentDefaults} from './educationAssignmentDefaults';
import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {EducationCategory} from './educationCategory';
import {EducationCourse} from './educationCourse';
import {EducationExternalSource} from './educationExternalSource';
import {EducationSchool} from './educationSchool';
import {EducationTerm} from './educationTerm';
import {EducationUser} from './educationUser';
import {Entity} from './entity';
import {Group} from './group';
import {IdentitySet} from './identitySet';

export interface EducationClass extends Entity{
    /** All categories associated with this class. Nullable. */
    assignmentCategories?:EducationCategory[] | undefined;
    /** Specifies class-level defaults respected by new assignments created in the class. */
    assignmentDefaults?:EducationAssignmentDefaults | undefined;
    /** All assignments associated with this class. Nullable. */
    assignments?:EducationAssignment[] | undefined;
    /** Specifies class-level assignments settings. */
    assignmentSettings?:EducationAssignmentSettings | undefined;
    /** Class code used by the school to identify the class. */
    classCode?:string | undefined;
    /** Course information for the class. */
    course?:EducationCourse | undefined;
    /** Entity who created the class. */
    createdBy?:IdentitySet | undefined;
    /** Description of the class. */
    description?:string | undefined;
    /** Name of the class. */
    displayName?:string | undefined;
    /** ID of the class from the syncing system. */
    externalId?:string | undefined;
    /** Name of the class in the syncing system. */
    externalName?:string | undefined;
    /** The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual. */
    externalSource?:EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    externalSourceDetail?:string | undefined;
    /** Grade level of the class. */
    grade?:string | undefined;
    /** The underlying Microsoft 365 group object. */
    group?:Group | undefined;
    /** Mail name for sending email to all members, if this is enabled. */
    mailNickname?:string | undefined;
    /** All users in the class. Nullable. */
    members?:EducationUser[] | undefined;
    /** All schools that this class is associated with. Nullable. */
    schools?:EducationSchool[] | undefined;
    /** All teachers in the class. Nullable. */
    teachers?:EducationUser[] | undefined;
    /** Term for the class. */
    term?:EducationTerm | undefined;
}
