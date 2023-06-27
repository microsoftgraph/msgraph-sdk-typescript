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
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationUser extends Entity, Parsable {
    /**
     * True if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter.
     */
    accountEnabled?: boolean | undefined;
    /**
     * The licenses that are assigned to the user. Not nullable.
     */
    assignedLicenses?: AssignedLicense[] | undefined;
    /**
     * The plans that are assigned to the user. Read-only. Not nullable.
     */
    assignedPlans?: AssignedPlan[] | undefined;
    /**
     * Assignments belonging to the user.
     */
    assignments?: EducationAssignment[] | undefined;
    /**
     * The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property.
     */
    businessPhones?: string[] | undefined;
    /**
     * Classes to which the user belongs. Nullable.
     */
    classes?: EducationClass[] | undefined;
    /**
     * The entity who created the user.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The name for the department in which the user works. Supports $filter.
     */
    department?: string | undefined;
    /**
     * The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Supports $filter and $orderby.
     */
    displayName?: string | undefined;
    /**
     * Where this user was created from. Possible values are: sis, manual.
     */
    externalSource?: EducationExternalSource | undefined;
    /**
     * The name of the external source this resource was generated from.
     */
    externalSourceDetail?: string | undefined;
    /**
     * The given name (first name) of the user. Supports $filter.
     */
    givenName?: string | undefined;
    /**
     * The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com. Read-Only. Supports $filter.
     */
    mail?: string | undefined;
    /**
     * The mail address of the user.
     */
    mailingAddress?: PhysicalAddress | undefined;
    /**
     * The mail alias for the user. This property must be specified when a user is created. Supports $filter.
     */
    mailNickname?: string | undefined;
    /**
     * The middle name of the user.
     */
    middleName?: string | undefined;
    /**
     * The primary cellular telephone number for the user.
     */
    mobilePhone?: string | undefined;
    /**
     * The officeLocation property
     */
    officeLocation?: string | undefined;
    /**
     * Additional information used to associate the Azure Active Directory user with its Active Directory counterpart.
     */
    onPremisesInfo?: EducationOnPremisesInfo | undefined;
    /**
     * Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two can be specified together; for example: DisablePasswordExpiration, DisableStrongPassword.
     */
    passwordPolicies?: string | undefined;
    /**
     * Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.
     */
    passwordProfile?: PasswordProfile | undefined;
    /**
     * The preferred language for the user that should follow the ISO 639-1 code, for example, en-US.
     */
    preferredLanguage?: string | undefined;
    /**
     * The primaryRole property
     */
    primaryRole?: EducationUserRole | undefined;
    /**
     * The plans that are provisioned for the user. Read-only. Not nullable.
     */
    provisionedPlans?: ProvisionedPlan[] | undefined;
    /**
     * The refreshTokensValidFromDateTime property
     */
    refreshTokensValidFromDateTime?: Date | undefined;
    /**
     * Related records associated with the user. Read-only.
     */
    relatedContacts?: RelatedContact[] | undefined;
    /**
     * The address where the user lives.
     */
    residenceAddress?: PhysicalAddress | undefined;
    /**
     * When set, the grading rubric attached to the assignment.
     */
    rubrics?: EducationRubric[] | undefined;
    /**
     * Schools to which the user belongs. Nullable.
     */
    schools?: EducationSchool[] | undefined;
    /**
     * True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false.
     */
    showInAddressList?: boolean | undefined;
    /**
     * If the primary role is student, this block will contain student specific data.
     */
    student?: EducationStudent | undefined;
    /**
     * The user's surname (family name or last name). Supports $filter.
     */
    surname?: string | undefined;
    /**
     * Classes for which the user is a teacher.
     */
    taughtClasses?: EducationClass[] | undefined;
    /**
     * If the primary role is teacher, this block will contain teacher specific data.
     */
    teacher?: EducationTeacher | undefined;
    /**
     * A two-letter country code (ISO standard 3166). Required for users who will be assigned licenses due to a legal requirement to check for availability of services in countries or regions. Examples include: US, JP, and GB. Not nullable. Supports $filter.
     */
    usageLocation?: string | undefined;
    /**
     * The directory user that corresponds to this user.
     */
    user?: User | undefined;
    /**
     * The user principal name (UPN) of the user. The UPN is an internet-style login name for the user based on the internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of the organization. Supports $filter and $orderby.
     */
    userPrincipalName?: string | undefined;
    /**
     * A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter.
     */
    userType?: string | undefined;
}
