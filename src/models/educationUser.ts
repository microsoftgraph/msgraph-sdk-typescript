import {createAssignedLicenseFromDiscriminatorValue} from './createAssignedLicenseFromDiscriminatorValue';
import {createAssignedPlanFromDiscriminatorValue} from './createAssignedPlanFromDiscriminatorValue';
import {createEducationAssignmentFromDiscriminatorValue} from './createEducationAssignmentFromDiscriminatorValue';
import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationOnPremisesInfoFromDiscriminatorValue} from './createEducationOnPremisesInfoFromDiscriminatorValue';
import {createEducationRubricFromDiscriminatorValue} from './createEducationRubricFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationStudentFromDiscriminatorValue} from './createEducationStudentFromDiscriminatorValue';
import {createEducationTeacherFromDiscriminatorValue} from './createEducationTeacherFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPasswordProfileFromDiscriminatorValue} from './createPasswordProfileFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {createProvisionedPlanFromDiscriminatorValue} from './createProvisionedPlanFromDiscriminatorValue';
import {createRelatedContactFromDiscriminatorValue} from './createRelatedContactFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {EducationExternalSource} from './educationExternalSource';
import {EducationUserRole} from './educationUserRole';
import {AssignedLicense, AssignedPlan, EducationAssignment, EducationClass, EducationOnPremisesInfo, EducationRubric, EducationSchool, EducationStudent, EducationTeacher, Entity, IdentitySet, PasswordProfile, PhysicalAddress, ProvisionedPlan, RelatedContact, User} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class EducationUser extends Entity implements Parsable {
    /** True if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter. */
    private _accountEnabled?: boolean | undefined;
    /** The licenses that are assigned to the user. Not nullable. */
    private _assignedLicenses?: AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable. */
    private _assignedPlans?: AssignedPlan[] | undefined;
    /** Assignments belonging to the user. */
    private _assignments?: EducationAssignment[] | undefined;
    /** The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property. */
    private _businessPhones?: string[] | undefined;
    /** Classes to which the user belongs. Nullable. */
    private _classes?: EducationClass[] | undefined;
    /** The entity who created the user. */
    private _createdBy?: IdentitySet | undefined;
    /** The name for the department in which the user works. Supports $filter. */
    private _department?: string | undefined;
    /** The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Supports $filter and $orderby. */
    private _displayName?: string | undefined;
    /** Where this user was created from. Possible values are: sis, manual. */
    private _externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resource was generated from. */
    private _externalSourceDetail?: string | undefined;
    /** The given name (first name) of the user. Supports $filter. */
    private _givenName?: string | undefined;
    /** The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com. Read-Only. Supports $filter. */
    private _mail?: string | undefined;
    /** The mail address of the user. */
    private _mailingAddress?: PhysicalAddress | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Supports $filter. */
    private _mailNickname?: string | undefined;
    /** The middle name of the user. */
    private _middleName?: string | undefined;
    /** The primary cellular telephone number for the user. */
    private _mobilePhone?: string | undefined;
    /** The officeLocation property */
    private _officeLocation?: string | undefined;
    /** Additional information used to associate the Azure Active Directory user with its Active Directory counterpart. */
    private _onPremisesInfo?: EducationOnPremisesInfo | undefined;
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two can be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. */
    private _passwordPolicies?: string | undefined;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. */
    private _passwordProfile?: PasswordProfile | undefined;
    /** The preferred language for the user that should follow the ISO 639-1 code, for example, en-US. */
    private _preferredLanguage?: string | undefined;
    /** The primaryRole property */
    private _primaryRole?: EducationUserRole | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. */
    private _provisionedPlans?: ProvisionedPlan[] | undefined;
    /** The refreshTokensValidFromDateTime property */
    private _refreshTokensValidFromDateTime?: Date | undefined;
    /** Related records associated with the user. Read-only. */
    private _relatedContacts?: RelatedContact[] | undefined;
    /** The address where the user lives. */
    private _residenceAddress?: PhysicalAddress | undefined;
    /** When set, the grading rubric attached to the assignment. */
    private _rubrics?: EducationRubric[] | undefined;
    /** Schools to which the user belongs. Nullable. */
    private _schools?: EducationSchool[] | undefined;
    /** True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. */
    private _showInAddressList?: boolean | undefined;
    /** If the primary role is student, this block will contain student specific data. */
    private _student?: EducationStudent | undefined;
    /** The user's surname (family name or last name). Supports $filter. */
    private _surname?: string | undefined;
    /** Classes for which the user is a teacher. */
    private _taughtClasses?: EducationClass[] | undefined;
    /** If the primary role is teacher, this block will contain teacher specific data. */
    private _teacher?: EducationTeacher | undefined;
    /** A two-letter country code (ISO standard 3166). Required for users who will be assigned licenses due to a legal requirement to check for availability of services in countries or regions. Examples include: US, JP, and GB. Not nullable. Supports $filter. */
    private _usageLocation?: string | undefined;
    /** The directory user that corresponds to this user. */
    private _user?: User | undefined;
    /** The user principal name (UPN) of the user. The UPN is an internet-style login name for the user based on the internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of the organization. Supports $filter and $orderby. */
    private _userPrincipalName?: string | undefined;
    /** A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter. */
    private _userType?: string | undefined;
    /**
     * Gets the accountEnabled property value. True if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter.
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. True if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter.
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        this._accountEnabled = value;
    };
    /**
     * Gets the assignedLicenses property value. The licenses that are assigned to the user. Not nullable.
     * @returns a assignedLicense
     */
    public get assignedLicenses() {
        return this._assignedLicenses;
    };
    /**
     * Sets the assignedLicenses property value. The licenses that are assigned to the user. Not nullable.
     * @param value Value to set for the assignedLicenses property.
     */
    public set assignedLicenses(value: AssignedLicense[] | undefined) {
        this._assignedLicenses = value;
    };
    /**
     * Gets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.
     * @returns a assignedPlan
     */
    public get assignedPlans() {
        return this._assignedPlans;
    };
    /**
     * Sets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.
     * @param value Value to set for the assignedPlans property.
     */
    public set assignedPlans(value: AssignedPlan[] | undefined) {
        this._assignedPlans = value;
    };
    /**
     * Gets the assignments property value. Assignments belonging to the user.
     * @returns a educationAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. Assignments belonging to the user.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: EducationAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Gets the businessPhones property value. The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property.
     * @returns a string
     */
    public get businessPhones() {
        return this._businessPhones;
    };
    /**
     * Sets the businessPhones property value. The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property.
     * @param value Value to set for the businessPhones property.
     */
    public set businessPhones(value: string[] | undefined) {
        this._businessPhones = value;
    };
    /**
     * Gets the classes property value. Classes to which the user belongs. Nullable.
     * @returns a educationClass
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Sets the classes property value. Classes to which the user belongs. Nullable.
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        this._classes = value;
    };
    /**
     * Instantiates a new educationUser and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.educationUser";
    };
    /**
     * Gets the createdBy property value. The entity who created the user.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The entity who created the user.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the department property value. The name for the department in which the user works. Supports $filter.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The name for the department in which the user works. Supports $filter.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Gets the displayName property value. The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Supports $filter and $orderby.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Supports $filter and $orderby.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the externalSource property value. Where this user was created from. Possible values are: sis, manual.
     * @returns a educationExternalSource
     */
    public get externalSource() {
        return this._externalSource;
    };
    /**
     * Sets the externalSource property value. Where this user was created from. Possible values are: sis, manual.
     * @param value Value to set for the externalSource property.
     */
    public set externalSource(value: EducationExternalSource | undefined) {
        this._externalSource = value;
    };
    /**
     * Gets the externalSourceDetail property value. The name of the external source this resource was generated from.
     * @returns a string
     */
    public get externalSourceDetail() {
        return this._externalSourceDetail;
    };
    /**
     * Sets the externalSourceDetail property value. The name of the external source this resource was generated from.
     * @param value Value to set for the externalSourceDetail property.
     */
    public set externalSourceDetail(value: string | undefined) {
        this._externalSourceDetail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountEnabled": n => { this.accountEnabled = n.getBooleanValue(); },
            "assignedLicenses": n => { this.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
            "assignedPlans": n => { this.assignedPlans = n.getCollectionOfObjectValues<AssignedPlan>(createAssignedPlanFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<EducationAssignment>(createEducationAssignmentFromDiscriminatorValue); },
            "businessPhones": n => { this.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
            "classes": n => { this.classes = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "department": n => { this.department = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalSource": n => { this.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
            "externalSourceDetail": n => { this.externalSourceDetail = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailingAddress": n => { this.mailingAddress = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "middleName": n => { this.middleName = n.getStringValue(); },
            "mobilePhone": n => { this.mobilePhone = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "onPremisesInfo": n => { this.onPremisesInfo = n.getObjectValue<EducationOnPremisesInfo>(createEducationOnPremisesInfoFromDiscriminatorValue); },
            "passwordPolicies": n => { this.passwordPolicies = n.getStringValue(); },
            "passwordProfile": n => { this.passwordProfile = n.getObjectValue<PasswordProfile>(createPasswordProfileFromDiscriminatorValue); },
            "preferredLanguage": n => { this.preferredLanguage = n.getStringValue(); },
            "primaryRole": n => { this.primaryRole = n.getEnumValue<EducationUserRole>(EducationUserRole); },
            "provisionedPlans": n => { this.provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlan>(createProvisionedPlanFromDiscriminatorValue); },
            "refreshTokensValidFromDateTime": n => { this.refreshTokensValidFromDateTime = n.getDateValue(); },
            "relatedContacts": n => { this.relatedContacts = n.getCollectionOfObjectValues<RelatedContact>(createRelatedContactFromDiscriminatorValue); },
            "residenceAddress": n => { this.residenceAddress = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "rubrics": n => { this.rubrics = n.getCollectionOfObjectValues<EducationRubric>(createEducationRubricFromDiscriminatorValue); },
            "schools": n => { this.schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
            "showInAddressList": n => { this.showInAddressList = n.getBooleanValue(); },
            "student": n => { this.student = n.getObjectValue<EducationStudent>(createEducationStudentFromDiscriminatorValue); },
            "surname": n => { this.surname = n.getStringValue(); },
            "taughtClasses": n => { this.taughtClasses = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
            "teacher": n => { this.teacher = n.getObjectValue<EducationTeacher>(createEducationTeacherFromDiscriminatorValue); },
            "usageLocation": n => { this.usageLocation = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "userType": n => { this.userType = n.getStringValue(); },
        };
    };
    /**
     * Gets the givenName property value. The given name (first name) of the user. Supports $filter.
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The given name (first name) of the user. Supports $filter.
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
    };
    /**
     * Gets the mail property value. The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com. Read-Only. Supports $filter.
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com. Read-Only. Supports $filter.
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        this._mail = value;
    };
    /**
     * Gets the mailingAddress property value. The mail address of the user.
     * @returns a physicalAddress
     */
    public get mailingAddress() {
        return this._mailingAddress;
    };
    /**
     * Sets the mailingAddress property value. The mail address of the user.
     * @param value Value to set for the mailingAddress property.
     */
    public set mailingAddress(value: PhysicalAddress | undefined) {
        this._mailingAddress = value;
    };
    /**
     * Gets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Supports $filter.
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Supports $filter.
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the middleName property value. The middle name of the user.
     * @returns a string
     */
    public get middleName() {
        return this._middleName;
    };
    /**
     * Sets the middleName property value. The middle name of the user.
     * @param value Value to set for the middleName property.
     */
    public set middleName(value: string | undefined) {
        this._middleName = value;
    };
    /**
     * Gets the mobilePhone property value. The primary cellular telephone number for the user.
     * @returns a string
     */
    public get mobilePhone() {
        return this._mobilePhone;
    };
    /**
     * Sets the mobilePhone property value. The primary cellular telephone number for the user.
     * @param value Value to set for the mobilePhone property.
     */
    public set mobilePhone(value: string | undefined) {
        this._mobilePhone = value;
    };
    /**
     * Gets the officeLocation property value. The officeLocation property
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. The officeLocation property
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        this._officeLocation = value;
    };
    /**
     * Gets the onPremisesInfo property value. Additional information used to associate the Azure Active Directory user with its Active Directory counterpart.
     * @returns a educationOnPremisesInfo
     */
    public get onPremisesInfo() {
        return this._onPremisesInfo;
    };
    /**
     * Sets the onPremisesInfo property value. Additional information used to associate the Azure Active Directory user with its Active Directory counterpart.
     * @param value Value to set for the onPremisesInfo property.
     */
    public set onPremisesInfo(value: EducationOnPremisesInfo | undefined) {
        this._onPremisesInfo = value;
    };
    /**
     * Gets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two can be specified together; for example: DisablePasswordExpiration, DisableStrongPassword.
     * @returns a string
     */
    public get passwordPolicies() {
        return this._passwordPolicies;
    };
    /**
     * Sets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two can be specified together; for example: DisablePasswordExpiration, DisableStrongPassword.
     * @param value Value to set for the passwordPolicies property.
     */
    public set passwordPolicies(value: string | undefined) {
        this._passwordPolicies = value;
    };
    /**
     * Gets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.
     * @returns a passwordProfile
     */
    public get passwordProfile() {
        return this._passwordProfile;
    };
    /**
     * Sets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.
     * @param value Value to set for the passwordProfile property.
     */
    public set passwordProfile(value: PasswordProfile | undefined) {
        this._passwordProfile = value;
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for the user that should follow the ISO 639-1 code, for example, en-US.
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for the user that should follow the ISO 639-1 code, for example, en-US.
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        this._preferredLanguage = value;
    };
    /**
     * Gets the primaryRole property value. The primaryRole property
     * @returns a educationUserRole
     */
    public get primaryRole() {
        return this._primaryRole;
    };
    /**
     * Sets the primaryRole property value. The primaryRole property
     * @param value Value to set for the primaryRole property.
     */
    public set primaryRole(value: EducationUserRole | undefined) {
        this._primaryRole = value;
    };
    /**
     * Gets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable.
     * @returns a provisionedPlan
     */
    public get provisionedPlans() {
        return this._provisionedPlans;
    };
    /**
     * Sets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable.
     * @param value Value to set for the provisionedPlans property.
     */
    public set provisionedPlans(value: ProvisionedPlan[] | undefined) {
        this._provisionedPlans = value;
    };
    /**
     * Gets the refreshTokensValidFromDateTime property value. The refreshTokensValidFromDateTime property
     * @returns a Date
     */
    public get refreshTokensValidFromDateTime() {
        return this._refreshTokensValidFromDateTime;
    };
    /**
     * Sets the refreshTokensValidFromDateTime property value. The refreshTokensValidFromDateTime property
     * @param value Value to set for the refreshTokensValidFromDateTime property.
     */
    public set refreshTokensValidFromDateTime(value: Date | undefined) {
        this._refreshTokensValidFromDateTime = value;
    };
    /**
     * Gets the relatedContacts property value. Related records associated with the user. Read-only.
     * @returns a relatedContact
     */
    public get relatedContacts() {
        return this._relatedContacts;
    };
    /**
     * Sets the relatedContacts property value. Related records associated with the user. Read-only.
     * @param value Value to set for the relatedContacts property.
     */
    public set relatedContacts(value: RelatedContact[] | undefined) {
        this._relatedContacts = value;
    };
    /**
     * Gets the residenceAddress property value. The address where the user lives.
     * @returns a physicalAddress
     */
    public get residenceAddress() {
        return this._residenceAddress;
    };
    /**
     * Sets the residenceAddress property value. The address where the user lives.
     * @param value Value to set for the residenceAddress property.
     */
    public set residenceAddress(value: PhysicalAddress | undefined) {
        this._residenceAddress = value;
    };
    /**
     * Gets the rubrics property value. When set, the grading rubric attached to the assignment.
     * @returns a educationRubric
     */
    public get rubrics() {
        return this._rubrics;
    };
    /**
     * Sets the rubrics property value. When set, the grading rubric attached to the assignment.
     * @param value Value to set for the rubrics property.
     */
    public set rubrics(value: EducationRubric[] | undefined) {
        this._rubrics = value;
    };
    /**
     * Gets the schools property value. Schools to which the user belongs. Nullable.
     * @returns a educationSchool
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. Schools to which the user belongs. Nullable.
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        this._schools = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues<AssignedLicense>("assignedLicenses", this.assignedLicenses);
        writer.writeCollectionOfObjectValues<AssignedPlan>("assignedPlans", this.assignedPlans);
        writer.writeCollectionOfObjectValues<EducationAssignment>("assignments", this.assignments);
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        writer.writeCollectionOfObjectValues<EducationClass>("classes", this.classes);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeStringValue("mail", this.mail);
        writer.writeObjectValue<PhysicalAddress>("mailingAddress", this.mailingAddress);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeStringValue("middleName", this.middleName);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeObjectValue<EducationOnPremisesInfo>("onPremisesInfo", this.onPremisesInfo);
        writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        writer.writeObjectValue<PasswordProfile>("passwordProfile", this.passwordProfile);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeEnumValue<EducationUserRole>("primaryRole", this.primaryRole);
        writer.writeCollectionOfObjectValues<ProvisionedPlan>("provisionedPlans", this.provisionedPlans);
        writer.writeDateValue("refreshTokensValidFromDateTime", this.refreshTokensValidFromDateTime);
        writer.writeCollectionOfObjectValues<RelatedContact>("relatedContacts", this.relatedContacts);
        writer.writeObjectValue<PhysicalAddress>("residenceAddress", this.residenceAddress);
        writer.writeCollectionOfObjectValues<EducationRubric>("rubrics", this.rubrics);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", this.schools);
        writer.writeBooleanValue("showInAddressList", this.showInAddressList);
        writer.writeObjectValue<EducationStudent>("student", this.student);
        writer.writeStringValue("surname", this.surname);
        writer.writeCollectionOfObjectValues<EducationClass>("taughtClasses", this.taughtClasses);
        writer.writeObjectValue<EducationTeacher>("teacher", this.teacher);
        writer.writeStringValue("usageLocation", this.usageLocation);
        writer.writeObjectValue<User>("user", this.user);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeStringValue("userType", this.userType);
    };
    /**
     * Gets the showInAddressList property value. True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false.
     * @returns a boolean
     */
    public get showInAddressList() {
        return this._showInAddressList;
    };
    /**
     * Sets the showInAddressList property value. True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false.
     * @param value Value to set for the showInAddressList property.
     */
    public set showInAddressList(value: boolean | undefined) {
        this._showInAddressList = value;
    };
    /**
     * Gets the student property value. If the primary role is student, this block will contain student specific data.
     * @returns a educationStudent
     */
    public get student() {
        return this._student;
    };
    /**
     * Sets the student property value. If the primary role is student, this block will contain student specific data.
     * @param value Value to set for the student property.
     */
    public set student(value: EducationStudent | undefined) {
        this._student = value;
    };
    /**
     * Gets the surname property value. The user's surname (family name or last name). Supports $filter.
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. The user's surname (family name or last name). Supports $filter.
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        this._surname = value;
    };
    /**
     * Gets the taughtClasses property value. Classes for which the user is a teacher.
     * @returns a educationClass
     */
    public get taughtClasses() {
        return this._taughtClasses;
    };
    /**
     * Sets the taughtClasses property value. Classes for which the user is a teacher.
     * @param value Value to set for the taughtClasses property.
     */
    public set taughtClasses(value: EducationClass[] | undefined) {
        this._taughtClasses = value;
    };
    /**
     * Gets the teacher property value. If the primary role is teacher, this block will contain teacher specific data.
     * @returns a educationTeacher
     */
    public get teacher() {
        return this._teacher;
    };
    /**
     * Sets the teacher property value. If the primary role is teacher, this block will contain teacher specific data.
     * @param value Value to set for the teacher property.
     */
    public set teacher(value: EducationTeacher | undefined) {
        this._teacher = value;
    };
    /**
     * Gets the usageLocation property value. A two-letter country code (ISO standard 3166). Required for users who will be assigned licenses due to a legal requirement to check for availability of services in countries or regions. Examples include: US, JP, and GB. Not nullable. Supports $filter.
     * @returns a string
     */
    public get usageLocation() {
        return this._usageLocation;
    };
    /**
     * Sets the usageLocation property value. A two-letter country code (ISO standard 3166). Required for users who will be assigned licenses due to a legal requirement to check for availability of services in countries or regions. Examples include: US, JP, and GB. Not nullable. Supports $filter.
     * @param value Value to set for the usageLocation property.
     */
    public set usageLocation(value: string | undefined) {
        this._usageLocation = value;
    };
    /**
     * Gets the user property value. The directory user that corresponds to this user.
     * @returns a user
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. The directory user that corresponds to this user.
     * @param value Value to set for the user property.
     */
    public set user(value: User | undefined) {
        this._user = value;
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an internet-style login name for the user based on the internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of the organization. Supports $filter and $orderby.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an internet-style login name for the user based on the internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of the organization. Supports $filter and $orderby.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
    /**
     * Gets the userType property value. A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter.
     * @returns a string
     */
    public get userType() {
        return this._userType;
    };
    /**
     * Sets the userType property value. A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter.
     * @param value Value to set for the userType property.
     */
    public set userType(value: string | undefined) {
        this._userType = value;
    };
}
