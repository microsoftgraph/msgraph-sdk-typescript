import { type EducationAssignment } from './educationAssignment';
import { type EducationAssignmentDefaults } from './educationAssignmentDefaults';
import { type EducationAssignmentSettings } from './educationAssignmentSettings';
import { type EducationCategory } from './educationCategory';
import { type EducationCourse } from './educationCourse';
import { EducationExternalSource } from './educationExternalSource';
import { type EducationSchool } from './educationSchool';
import { type EducationTerm } from './educationTerm';
import { type EducationUser } from './educationUser';
import { type Entity } from './entity';
import { type Group } from './group';
import { type IdentitySet } from './identitySet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationClass extends Entity, Parsable {
    /**
     * All categories associated with this class. Nullable.
     */
    assignmentCategories?: EducationCategory[] | undefined;
    /**
     * Specifies class-level defaults respected by new assignments created in the class.
     */
    assignmentDefaults?: EducationAssignmentDefaults | undefined;
    /**
     * All assignments associated with this class. Nullable.
     */
    assignments?: EducationAssignment[] | undefined;
    /**
     * Specifies class-level assignments settings.
     */
    assignmentSettings?: EducationAssignmentSettings | undefined;
    /**
     * Class code used by the school to identify the class.
     */
    classCode?: string | undefined;
    /**
     * The course property
     */
    course?: EducationCourse | undefined;
    /**
     * Entity who created the class
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Description of the class.
     */
    description?: string | undefined;
    /**
     * Name of the class.
     */
    displayName?: string | undefined;
    /**
     * ID of the class from the syncing system.
     */
    externalId?: string | undefined;
    /**
     * Name of the class in the syncing system.
     */
    externalName?: string | undefined;
    /**
     * How this class was created. Possible values are: sis, manual.
     */
    externalSource?: EducationExternalSource | undefined;
    /**
     * The name of the external source this resources was generated from.
     */
    externalSourceDetail?: string | undefined;
    /**
     * Grade level of the class.
     */
    grade?: string | undefined;
    /**
     * The underlying Microsoft 365 group object.
     */
    group?: Group | undefined;
    /**
     * Mail name for sending email to all members, if this is enabled.
     */
    mailNickname?: string | undefined;
    /**
     * All users in the class. Nullable.
     */
    members?: EducationUser[] | undefined;
    /**
     * All schools that this class is associated with. Nullable.
     */
    schools?: EducationSchool[] | undefined;
    /**
     * All teachers in the class. Nullable.
     */
    teachers?: EducationUser[] | undefined;
    /**
     * Term for this class.
     */
    term?: EducationTerm | undefined;
}
