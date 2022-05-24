import {AssignedLicense} from './assignedLicense';
import {AssignedPlan} from './assignedPlan';
import {EducationAssignment} from './educationAssignment';
import {EducationClass} from './educationClass';
import {EducationExternalSource} from './educationExternalSource';
import {EducationOnPremisesInfo} from './educationOnPremisesInfo';
import {EducationRubric} from './educationRubric';
import {EducationSchool} from './educationSchool';
import {EducationStudent} from './educationStudent';
import {EducationTeacher} from './educationTeacher';
import {EducationUserRole} from './educationUserRole';
import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PasswordProfile} from './passwordProfile';
import {PhysicalAddress} from './physicalAddress';
import {ProvisionedPlan} from './provisionedPlan';
import {RelatedContact} from './relatedContact';
import {User} from './user';

export interface EducationUser extends Entity{
    /** True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter. */
    accountEnabled?:boolean | undefined;
    /** The licenses that are assigned to the user. Not nullable. */
    assignedLicenses?:AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable. */
    assignedPlans?:AssignedPlan[] | undefined;
    /** List of assignments for the user. Nullable. */
    assignments?:EducationAssignment[] | undefined;
    /** The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property. */
    businessPhones?:string[] | undefined;
    /** Classes to which the user belongs. Nullable. */
    classes?:EducationClass[] | undefined;
    /** Entity who created the user. */
    createdBy?:IdentitySet | undefined;
    /** The name for the department in which the user works. Supports /$filter. */
    department?:string | undefined;
    /** The name displayed in the address book for the user. Supports $filter and $orderby. */
    displayName?:string | undefined;
    /** The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual. */
    externalSource?:EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    externalSourceDetail?:string | undefined;
    /** The given name (first name) of the user. Supports /$filter. */
    givenName?:string | undefined;
    /** The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter. */
    mail?:string | undefined;
    /** Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources. */
    mailingAddress?:PhysicalAddress | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Supports /$filter. */
    mailNickname?:string | undefined;
    /** The middle name of user. */
    middleName?:string | undefined;
    /** The primary cellular telephone number for the user. */
    mobilePhone?:string | undefined;
    /** The officeLocation property */
    officeLocation?:string | undefined;
    /** Additional information used to associate the AAD user with it's Active Directory counterpart. */
    onPremisesInfo?:EducationOnPremisesInfo | undefined;
    /** Specifies password policies for the user. See standard [user] resource for additional details. */
    passwordPolicies?:string | undefined;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. See standard [user] resource for additional details. */
    passwordProfile?:PasswordProfile | undefined;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'. */
    preferredLanguage?:string | undefined;
    /** Default role for a user. The user's role might be different in an individual class. Possible values are: student, teacher, faculty. Supports /$filter. */
    primaryRole?:EducationUserRole | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. */
    provisionedPlans?:ProvisionedPlan[] | undefined;
    /** The refreshTokensValidFromDateTime property */
    refreshTokensValidFromDateTime?:Date | undefined;
    /** Related records related to the user. Possible relationships are parent, relative, aide, doctor, guardian, child, other, unknownFutureValue */
    relatedContacts?:RelatedContact[] | undefined;
    /** Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources. */
    residenceAddress?:PhysicalAddress | undefined;
    /** When set, the grading rubric attached to the assignment. */
    rubrics?:EducationRubric[] | undefined;
    /** Schools to which the user belongs. Nullable. */
    schools?:EducationSchool[] | undefined;
    /** True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. */
    showInAddressList?:boolean | undefined;
    /** If the primary role is student, this block will contain student specific data. */
    student?:EducationStudent | undefined;
    /** The user's surname (family name or last name). Supports /$filter. */
    surname?:string | undefined;
    /** Classes for which the user is a teacher. */
    taughtClasses?:EducationClass[] | undefined;
    /** If the primary role is teacher, this block will contain teacher specific data. */
    teacher?:EducationTeacher | undefined;
    /** A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable. Supports /$filter. */
    usageLocation?:string | undefined;
    /** The directory user that corresponds to this user. */
    user?:User | undefined;
    /** The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional details. */
    userPrincipalName?:string | undefined;
    /** A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports /$filter. */
    userType?:string | undefined;
}
