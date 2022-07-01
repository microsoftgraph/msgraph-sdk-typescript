import {AssignedLicense} from './assignedLicense';
import {AssignedPlan} from './assignedPlan';
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
import {EducationAssignment} from './educationAssignment';
import {EducationClass} from './educationClass';
import {EducationExternalSource} from './educationExternalSource';
import {EducationOnPremisesInfo} from './educationOnPremisesInfo';
import {EducationRubric} from './educationRubric';
import {EducationSchool} from './educationSchool';
import {EducationStudent} from './educationStudent';
import {EducationTeacher} from './educationTeacher';
import {EducationUser} from './educationUser';
import {EducationUserRole} from './educationUserRole';
import {IdentitySet} from './identitySet';
import {AssignedLicenseImpl, AssignedPlanImpl, EducationAssignmentImpl, EducationClassImpl, EducationOnPremisesInfoImpl, EducationRubricImpl, EducationSchoolImpl, EducationStudentImpl, EducationTeacherImpl, EntityImpl, IdentitySetImpl, PasswordProfileImpl, PhysicalAddressImpl, ProvisionedPlanImpl, RelatedContactImpl, UserImpl} from './index';
import {PasswordProfile} from './passwordProfile';
import {PhysicalAddress} from './physicalAddress';
import {ProvisionedPlan} from './provisionedPlan';
import {RelatedContact} from './relatedContact';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationUserImpl extends EntityImpl implements EducationUser {
    /** True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter. */
    private _accountEnabled?: boolean | undefined;
    /** The licenses that are assigned to the user. Not nullable. */
    private _assignedLicenses?: AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable. */
    private _assignedPlans?: AssignedPlan[] | undefined;
    /** List of assignments for the user. Nullable. */
    private _assignments?: EducationAssignment[] | undefined;
    /** The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property. */
    private _businessPhones?: string[] | undefined;
    /** Classes to which the user belongs. Nullable. */
    private _classes?: EducationClass[] | undefined;
    /** Entity who created the user. */
    private _createdBy?: IdentitySet | undefined;
    /** The name for the department in which the user works. Supports /$filter. */
    private _department?: string | undefined;
    /** The name displayed in the address book for the user. Supports $filter and $orderby. */
    private _displayName?: string | undefined;
    /** The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual. */
    private _externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    private _externalSourceDetail?: string | undefined;
    /** The given name (first name) of the user. Supports /$filter. */
    private _givenName?: string | undefined;
    /** The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter. */
    private _mail?: string | undefined;
    /** Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources. */
    private _mailingAddress?: PhysicalAddress | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Supports /$filter. */
    private _mailNickname?: string | undefined;
    /** The middle name of user. */
    private _middleName?: string | undefined;
    /** The primary cellular telephone number for the user. */
    private _mobilePhone?: string | undefined;
    /** The officeLocation property */
    private _officeLocation?: string | undefined;
    /** Additional information used to associate the AAD user with it's Active Directory counterpart. */
    private _onPremisesInfo?: EducationOnPremisesInfo | undefined;
    /** Specifies password policies for the user. See standard [user] resource for additional details. */
    private _passwordPolicies?: string | undefined;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. See standard [user] resource for additional details. */
    private _passwordProfile?: PasswordProfile | undefined;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'. */
    private _preferredLanguage?: string | undefined;
    /** Default role for a user. The user's role might be different in an individual class. Possible values are: student, teacher, faculty. Supports /$filter. */
    private _primaryRole?: EducationUserRole | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. */
    private _provisionedPlans?: ProvisionedPlan[] | undefined;
    /** The refreshTokensValidFromDateTime property */
    private _refreshTokensValidFromDateTime?: Date | undefined;
    /** Related records related to the user. Possible relationships are parent, relative, aide, doctor, guardian, child, other, unknownFutureValue */
    private _relatedContacts?: RelatedContact[] | undefined;
    /** Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources. */
    private _residenceAddress?: PhysicalAddress | undefined;
    /** When set, the grading rubric attached to the assignment. */
    private _rubrics?: EducationRubric[] | undefined;
    /** Schools to which the user belongs. Nullable. */
    private _schools?: EducationSchool[] | undefined;
    /** True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. */
    private _showInAddressList?: boolean | undefined;
    /** If the primary role is student, this block will contain student specific data. */
    private _student?: EducationStudent | undefined;
    /** The user's surname (family name or last name). Supports /$filter. */
    private _surname?: string | undefined;
    /** Classes for which the user is a teacher. */
    private _taughtClasses?: EducationClass[] | undefined;
    /** If the primary role is teacher, this block will contain teacher specific data. */
    private _teacher?: EducationTeacher | undefined;
    /** A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable. Supports /$filter. */
    private _usageLocation?: string | undefined;
    /** The directory user that corresponds to this user. */
    private _user?: User | undefined;
    /** The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional details. */
    private _userPrincipalName?: string | undefined;
    /** A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports /$filter. */
    private _userType?: string | undefined;
    /**
     * Gets the accountEnabled property value. True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter.
     * @returns a boolean
     */
    public get accountEnabled() {
        return this._accountEnabled;
    };
    /**
     * Sets the accountEnabled property value. True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter.
     * @param value Value to set for the accountEnabled property.
     */
    public set accountEnabled(value: boolean | undefined) {
        if(value) {
            this._accountEnabled = value;
        }
    };
    /**
     * Gets the assignedLicenses property value. The licenses that are assigned to the user. Not nullable.
     * @returns a AssignedLicenseInterface
     */
    public get assignedLicenses() {
        return this._assignedLicenses;
    };
    /**
     * Sets the assignedLicenses property value. The licenses that are assigned to the user. Not nullable.
     * @param value Value to set for the assignedLicenses property.
     */
    public set assignedLicenses(value: AssignedLicense[] | undefined) {
        if(value) {
            const assignedLicensesArrValue: AssignedLicenseImpl[] = [];
            this.assignedLicenses?.forEach(element => {
                assignedLicensesArrValue.push((element instanceof AssignedLicenseImpl? element as AssignedLicenseImpl:new AssignedLicenseImpl(element)));
            });
            this._assignedLicenses = assignedLicensesArrValue;
        }
    };
    /**
     * Gets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.
     * @returns a AssignedPlanInterface
     */
    public get assignedPlans() {
        return this._assignedPlans;
    };
    /**
     * Sets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.
     * @param value Value to set for the assignedPlans property.
     */
    public set assignedPlans(value: AssignedPlan[] | undefined) {
        if(value) {
            const assignedPlansArrValue: AssignedPlanImpl[] = [];
            this.assignedPlans?.forEach(element => {
                assignedPlansArrValue.push((element instanceof AssignedPlanImpl? element as AssignedPlanImpl:new AssignedPlanImpl(element)));
            });
            this._assignedPlans = assignedPlansArrValue;
        }
    };
    /**
     * Gets the assignments property value. List of assignments for the user. Nullable.
     * @returns a EducationAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. List of assignments for the user. Nullable.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: EducationAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: EducationAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof EducationAssignmentImpl? element as EducationAssignmentImpl:new EducationAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
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
        if(value) {
            this._businessPhones = value;
        }
    };
    /**
     * Gets the classes property value. Classes to which the user belongs. Nullable.
     * @returns a EducationClassInterface
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Sets the classes property value. Classes to which the user belongs. Nullable.
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        if(value) {
            const classesArrValue: EducationClassImpl[] = [];
            this.classes?.forEach(element => {
                classesArrValue.push((element instanceof EducationClassImpl? element as EducationClassImpl:new EducationClassImpl(element)));
            });
            this._classes = classesArrValue;
        }
    };
    /**
     * Instantiates a new educationUser and sets the default values.
     * @param educationUserParameterValue 
     */
    public constructor(educationUserParameterValue?: EducationUser | undefined) {
        super(educationUserParameterValue);
        this._accountEnabled = educationUserParameterValue?.accountEnabled;
        this._assignedLicenses = educationUserParameterValue?.assignedLicenses;
        this._assignedPlans = educationUserParameterValue?.assignedPlans;
        this._assignments = educationUserParameterValue?.assignments;
        this._businessPhones = educationUserParameterValue?.businessPhones;
        this._classes = educationUserParameterValue?.classes;
        this._createdBy = educationUserParameterValue?.createdBy;
        this._department = educationUserParameterValue?.department;
        this._displayName = educationUserParameterValue?.displayName;
        this._externalSource = educationUserParameterValue?.externalSource;
        this._externalSourceDetail = educationUserParameterValue?.externalSourceDetail;
        this._givenName = educationUserParameterValue?.givenName;
        this._mail = educationUserParameterValue?.mail;
        this._mailingAddress = educationUserParameterValue?.mailingAddress;
        this._mailNickname = educationUserParameterValue?.mailNickname;
        this._middleName = educationUserParameterValue?.middleName;
        this._mobilePhone = educationUserParameterValue?.mobilePhone;
        this._officeLocation = educationUserParameterValue?.officeLocation;
        this._onPremisesInfo = educationUserParameterValue?.onPremisesInfo;
        this._passwordPolicies = educationUserParameterValue?.passwordPolicies;
        this._passwordProfile = educationUserParameterValue?.passwordProfile;
        this._preferredLanguage = educationUserParameterValue?.preferredLanguage;
        this._primaryRole = educationUserParameterValue?.primaryRole;
        this._provisionedPlans = educationUserParameterValue?.provisionedPlans;
        this._refreshTokensValidFromDateTime = educationUserParameterValue?.refreshTokensValidFromDateTime;
        this._relatedContacts = educationUserParameterValue?.relatedContacts;
        this._residenceAddress = educationUserParameterValue?.residenceAddress;
        this._rubrics = educationUserParameterValue?.rubrics;
        this._schools = educationUserParameterValue?.schools;
        this._showInAddressList = educationUserParameterValue?.showInAddressList;
        this._student = educationUserParameterValue?.student;
        this._surname = educationUserParameterValue?.surname;
        this._taughtClasses = educationUserParameterValue?.taughtClasses;
        this._teacher = educationUserParameterValue?.teacher;
        this._usageLocation = educationUserParameterValue?.usageLocation;
        this._user = educationUserParameterValue?.user;
        this._userPrincipalName = educationUserParameterValue?.userPrincipalName;
        this._userType = educationUserParameterValue?.userType;
    };
    /**
     * Gets the createdBy property value. Entity who created the user.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Entity who created the user.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the department property value. The name for the department in which the user works. Supports /$filter.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The name for the department in which the user works. Supports /$filter.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        if(value) {
            this._department = value;
        }
    };
    /**
     * Gets the displayName property value. The name displayed in the address book for the user. Supports $filter and $orderby.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name displayed in the address book for the user. Supports $filter and $orderby.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
     * @returns a educationExternalSource
     */
    public get externalSource() {
        return this._externalSource;
    };
    /**
     * Sets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
     * @param value Value to set for the externalSource property.
     */
    public set externalSource(value: EducationExternalSource | undefined) {
        if(value) {
            this._externalSource = value;
        }
    };
    /**
     * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @returns a string
     */
    public get externalSourceDetail() {
        return this._externalSourceDetail;
    };
    /**
     * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @param value Value to set for the externalSourceDetail property.
     */
    public set externalSourceDetail(value: string | undefined) {
        if(value) {
            this._externalSourceDetail = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountEnabled": n => { this.accountEnabled = n.getBooleanValue(); },
            "assignedLicenses": n => { this.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicenseImpl>(createAssignedLicenseFromDiscriminatorValue); },
            "assignedPlans": n => { this.assignedPlans = n.getCollectionOfObjectValues<AssignedPlanImpl>(createAssignedPlanFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<EducationAssignmentImpl>(createEducationAssignmentFromDiscriminatorValue); },
            "businessPhones": n => { this.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
            "classes": n => { this.classes = n.getCollectionOfObjectValues<EducationClassImpl>(createEducationClassFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "department": n => { this.department = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalSource": n => { this.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
            "externalSourceDetail": n => { this.externalSourceDetail = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "mail": n => { this.mail = n.getStringValue(); },
            "mailingAddress": n => { this.mailingAddress = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "middleName": n => { this.middleName = n.getStringValue(); },
            "mobilePhone": n => { this.mobilePhone = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "onPremisesInfo": n => { this.onPremisesInfo = n.getObjectValue<EducationOnPremisesInfoImpl>(createEducationOnPremisesInfoFromDiscriminatorValue); },
            "passwordPolicies": n => { this.passwordPolicies = n.getStringValue(); },
            "passwordProfile": n => { this.passwordProfile = n.getObjectValue<PasswordProfileImpl>(createPasswordProfileFromDiscriminatorValue); },
            "preferredLanguage": n => { this.preferredLanguage = n.getStringValue(); },
            "primaryRole": n => { this.primaryRole = n.getEnumValue<EducationUserRole>(EducationUserRole); },
            "provisionedPlans": n => { this.provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlanImpl>(createProvisionedPlanFromDiscriminatorValue); },
            "refreshTokensValidFromDateTime": n => { this.refreshTokensValidFromDateTime = n.getDateValue(); },
            "relatedContacts": n => { this.relatedContacts = n.getCollectionOfObjectValues<RelatedContactImpl>(createRelatedContactFromDiscriminatorValue); },
            "residenceAddress": n => { this.residenceAddress = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "rubrics": n => { this.rubrics = n.getCollectionOfObjectValues<EducationRubricImpl>(createEducationRubricFromDiscriminatorValue); },
            "schools": n => { this.schools = n.getCollectionOfObjectValues<EducationSchoolImpl>(createEducationSchoolFromDiscriminatorValue); },
            "showInAddressList": n => { this.showInAddressList = n.getBooleanValue(); },
            "student": n => { this.student = n.getObjectValue<EducationStudentImpl>(createEducationStudentFromDiscriminatorValue); },
            "surname": n => { this.surname = n.getStringValue(); },
            "taughtClasses": n => { this.taughtClasses = n.getCollectionOfObjectValues<EducationClassImpl>(createEducationClassFromDiscriminatorValue); },
            "teacher": n => { this.teacher = n.getObjectValue<EducationTeacherImpl>(createEducationTeacherFromDiscriminatorValue); },
            "usageLocation": n => { this.usageLocation = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<UserImpl>(createUserFromDiscriminatorValue); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "userType": n => { this.userType = n.getStringValue(); },
        };
    };
    /**
     * Gets the givenName property value. The given name (first name) of the user. Supports /$filter.
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The given name (first name) of the user. Supports /$filter.
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        if(value) {
            this._givenName = value;
        }
    };
    /**
     * Gets the mail property value. The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter.
     * @returns a string
     */
    public get mail() {
        return this._mail;
    };
    /**
     * Sets the mail property value. The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter.
     * @param value Value to set for the mail property.
     */
    public set mail(value: string | undefined) {
        if(value) {
            this._mail = value;
        }
    };
    /**
     * Gets the mailingAddress property value. Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources.
     * @returns a PhysicalAddressInterface
     */
    public get mailingAddress() {
        return this._mailingAddress;
    };
    /**
     * Sets the mailingAddress property value. Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources.
     * @param value Value to set for the mailingAddress property.
     */
    public set mailingAddress(value: PhysicalAddress | undefined) {
        if(value) {
            this._mailingAddress = value instanceof PhysicalAddressImpl? value as PhysicalAddressImpl: new PhysicalAddressImpl(value);
        }
    };
    /**
     * Gets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Supports /$filter.
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Supports /$filter.
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        if(value) {
            this._mailNickname = value;
        }
    };
    /**
     * Gets the middleName property value. The middle name of user.
     * @returns a string
     */
    public get middleName() {
        return this._middleName;
    };
    /**
     * Sets the middleName property value. The middle name of user.
     * @param value Value to set for the middleName property.
     */
    public set middleName(value: string | undefined) {
        if(value) {
            this._middleName = value;
        }
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
        if(value) {
            this._mobilePhone = value;
        }
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
        if(value) {
            this._officeLocation = value;
        }
    };
    /**
     * Gets the onPremisesInfo property value. Additional information used to associate the AAD user with it's Active Directory counterpart.
     * @returns a EducationOnPremisesInfoInterface
     */
    public get onPremisesInfo() {
        return this._onPremisesInfo;
    };
    /**
     * Sets the onPremisesInfo property value. Additional information used to associate the AAD user with it's Active Directory counterpart.
     * @param value Value to set for the onPremisesInfo property.
     */
    public set onPremisesInfo(value: EducationOnPremisesInfo | undefined) {
        if(value) {
            this._onPremisesInfo = value instanceof EducationOnPremisesInfoImpl? value as EducationOnPremisesInfoImpl: new EducationOnPremisesInfoImpl(value);
        }
    };
    /**
     * Gets the passwordPolicies property value. Specifies password policies for the user. See standard [user] resource for additional details.
     * @returns a string
     */
    public get passwordPolicies() {
        return this._passwordPolicies;
    };
    /**
     * Sets the passwordPolicies property value. Specifies password policies for the user. See standard [user] resource for additional details.
     * @param value Value to set for the passwordPolicies property.
     */
    public set passwordPolicies(value: string | undefined) {
        if(value) {
            this._passwordPolicies = value;
        }
    };
    /**
     * Gets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. See standard [user] resource for additional details.
     * @returns a PasswordProfileInterface
     */
    public get passwordProfile() {
        return this._passwordProfile;
    };
    /**
     * Sets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. See standard [user] resource for additional details.
     * @param value Value to set for the passwordProfile property.
     */
    public set passwordProfile(value: PasswordProfile | undefined) {
        if(value) {
            this._passwordProfile = value instanceof PasswordProfileImpl? value as PasswordProfileImpl: new PasswordProfileImpl(value);
        }
    };
    /**
     * Gets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'.
     * @returns a string
     */
    public get preferredLanguage() {
        return this._preferredLanguage;
    };
    /**
     * Sets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'.
     * @param value Value to set for the preferredLanguage property.
     */
    public set preferredLanguage(value: string | undefined) {
        if(value) {
            this._preferredLanguage = value;
        }
    };
    /**
     * Gets the primaryRole property value. Default role for a user. The user's role might be different in an individual class. Possible values are: student, teacher, faculty. Supports /$filter.
     * @returns a educationUserRole
     */
    public get primaryRole() {
        return this._primaryRole;
    };
    /**
     * Sets the primaryRole property value. Default role for a user. The user's role might be different in an individual class. Possible values are: student, teacher, faculty. Supports /$filter.
     * @param value Value to set for the primaryRole property.
     */
    public set primaryRole(value: EducationUserRole | undefined) {
        if(value) {
            this._primaryRole = value;
        }
    };
    /**
     * Gets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable.
     * @returns a ProvisionedPlanInterface
     */
    public get provisionedPlans() {
        return this._provisionedPlans;
    };
    /**
     * Sets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable.
     * @param value Value to set for the provisionedPlans property.
     */
    public set provisionedPlans(value: ProvisionedPlan[] | undefined) {
        if(value) {
            const provisionedPlansArrValue: ProvisionedPlanImpl[] = [];
            this.provisionedPlans?.forEach(element => {
                provisionedPlansArrValue.push((element instanceof ProvisionedPlanImpl? element as ProvisionedPlanImpl:new ProvisionedPlanImpl(element)));
            });
            this._provisionedPlans = provisionedPlansArrValue;
        }
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
        if(value) {
            this._refreshTokensValidFromDateTime = value;
        }
    };
    /**
     * Gets the relatedContacts property value. Related records related to the user. Possible relationships are parent, relative, aide, doctor, guardian, child, other, unknownFutureValue
     * @returns a RelatedContactInterface
     */
    public get relatedContacts() {
        return this._relatedContacts;
    };
    /**
     * Sets the relatedContacts property value. Related records related to the user. Possible relationships are parent, relative, aide, doctor, guardian, child, other, unknownFutureValue
     * @param value Value to set for the relatedContacts property.
     */
    public set relatedContacts(value: RelatedContact[] | undefined) {
        if(value) {
            const relatedContactsArrValue: RelatedContactImpl[] = [];
            this.relatedContacts?.forEach(element => {
                relatedContactsArrValue.push((element instanceof RelatedContactImpl? element as RelatedContactImpl:new RelatedContactImpl(element)));
            });
            this._relatedContacts = relatedContactsArrValue;
        }
    };
    /**
     * Gets the residenceAddress property value. Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources.
     * @returns a PhysicalAddressInterface
     */
    public get residenceAddress() {
        return this._residenceAddress;
    };
    /**
     * Sets the residenceAddress property value. Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources.
     * @param value Value to set for the residenceAddress property.
     */
    public set residenceAddress(value: PhysicalAddress | undefined) {
        if(value) {
            this._residenceAddress = value instanceof PhysicalAddressImpl? value as PhysicalAddressImpl: new PhysicalAddressImpl(value);
        }
    };
    /**
     * Gets the rubrics property value. When set, the grading rubric attached to the assignment.
     * @returns a EducationRubricInterface
     */
    public get rubrics() {
        return this._rubrics;
    };
    /**
     * Sets the rubrics property value. When set, the grading rubric attached to the assignment.
     * @param value Value to set for the rubrics property.
     */
    public set rubrics(value: EducationRubric[] | undefined) {
        if(value) {
            const rubricsArrValue: EducationRubricImpl[] = [];
            this.rubrics?.forEach(element => {
                rubricsArrValue.push((element instanceof EducationRubricImpl? element as EducationRubricImpl:new EducationRubricImpl(element)));
            });
            this._rubrics = rubricsArrValue;
        }
    };
    /**
     * Gets the schools property value. Schools to which the user belongs. Nullable.
     * @returns a EducationSchoolInterface
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. Schools to which the user belongs. Nullable.
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        if(value) {
            const schoolsArrValue: EducationSchoolImpl[] = [];
            this.schools?.forEach(element => {
                schoolsArrValue.push((element instanceof EducationSchoolImpl? element as EducationSchoolImpl:new EducationSchoolImpl(element)));
            });
            this._schools = schoolsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountEnabled){
            writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        }
        if(this.assignedLicenses && this.assignedLicenses.length != 0){        const assignedLicensesArrValue: AssignedLicenseImpl[] = [];
        this.assignedLicenses?.forEach(element => {
            assignedLicensesArrValue.push((element instanceof AssignedLicenseImpl? element as AssignedLicenseImpl:new AssignedLicenseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("assignedLicenses", assignedLicensesArrValue);
        }
        if(this.assignedPlans && this.assignedPlans.length != 0){        const assignedPlansArrValue: AssignedPlanImpl[] = [];
        this.assignedPlans?.forEach(element => {
            assignedPlansArrValue.push((element instanceof AssignedPlanImpl? element as AssignedPlanImpl:new AssignedPlanImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AssignedPlanImpl>("assignedPlans", assignedPlansArrValue);
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: EducationAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof EducationAssignmentImpl? element as EducationAssignmentImpl:new EducationAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.businessPhones){
            writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        }
        if(this.classes && this.classes.length != 0){        const classesArrValue: EducationClassImpl[] = [];
        this.classes?.forEach(element => {
            classesArrValue.push((element instanceof EducationClassImpl? element as EducationClassImpl:new EducationClassImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationClassImpl>("classes", classesArrValue);
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (this.createdBy instanceof IdentitySetImpl? this.createdBy as IdentitySetImpl: new IdentitySetImpl(this.createdBy)));
        }
        if(this.department){
            writer.writeStringValue("department", this.department);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalSource){
            writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        }
        if(this.externalSourceDetail){
            writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        }
        if(this.givenName){
            writer.writeStringValue("givenName", this.givenName);
        }
        if(this.mail){
            writer.writeStringValue("mail", this.mail);
        }
        if(this.mailingAddress){
            writer.writeObjectValue<PhysicalAddressImpl>("mailingAddress", (this.mailingAddress instanceof PhysicalAddressImpl? this.mailingAddress as PhysicalAddressImpl: new PhysicalAddressImpl(this.mailingAddress)));
        }
        if(this.mailNickname){
            writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.middleName){
            writer.writeStringValue("middleName", this.middleName);
        }
        if(this.mobilePhone){
            writer.writeStringValue("mobilePhone", this.mobilePhone);
        }
        if(this.officeLocation){
            writer.writeStringValue("officeLocation", this.officeLocation);
        }
        if(this.onPremisesInfo){
            writer.writeObjectValue<EducationOnPremisesInfoImpl>("onPremisesInfo", (this.onPremisesInfo instanceof EducationOnPremisesInfoImpl? this.onPremisesInfo as EducationOnPremisesInfoImpl: new EducationOnPremisesInfoImpl(this.onPremisesInfo)));
        }
        if(this.passwordPolicies){
            writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        }
        if(this.passwordProfile){
            writer.writeObjectValue<PasswordProfileImpl>("passwordProfile", (this.passwordProfile instanceof PasswordProfileImpl? this.passwordProfile as PasswordProfileImpl: new PasswordProfileImpl(this.passwordProfile)));
        }
        if(this.preferredLanguage){
            writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        }
        if(this.primaryRole){
            writer.writeEnumValue<EducationUserRole>("primaryRole", this.primaryRole);
        }
        if(this.provisionedPlans && this.provisionedPlans.length != 0){        const provisionedPlansArrValue: ProvisionedPlanImpl[] = [];
        this.provisionedPlans?.forEach(element => {
            provisionedPlansArrValue.push((element instanceof ProvisionedPlanImpl? element as ProvisionedPlanImpl:new ProvisionedPlanImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProvisionedPlanImpl>("provisionedPlans", provisionedPlansArrValue);
        }
        if(this.refreshTokensValidFromDateTime){
            writer.writeDateValue("refreshTokensValidFromDateTime", this.refreshTokensValidFromDateTime);
        }
        if(this.relatedContacts && this.relatedContacts.length != 0){        const relatedContactsArrValue: RelatedContactImpl[] = [];
        this.relatedContacts?.forEach(element => {
            relatedContactsArrValue.push((element instanceof RelatedContactImpl? element as RelatedContactImpl:new RelatedContactImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RelatedContactImpl>("relatedContacts", relatedContactsArrValue);
        }
        if(this.residenceAddress){
            writer.writeObjectValue<PhysicalAddressImpl>("residenceAddress", (this.residenceAddress instanceof PhysicalAddressImpl? this.residenceAddress as PhysicalAddressImpl: new PhysicalAddressImpl(this.residenceAddress)));
        }
        if(this.rubrics && this.rubrics.length != 0){        const rubricsArrValue: EducationRubricImpl[] = [];
        this.rubrics?.forEach(element => {
            rubricsArrValue.push((element instanceof EducationRubricImpl? element as EducationRubricImpl:new EducationRubricImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationRubricImpl>("rubrics", rubricsArrValue);
        }
        if(this.schools && this.schools.length != 0){        const schoolsArrValue: EducationSchoolImpl[] = [];
        this.schools?.forEach(element => {
            schoolsArrValue.push((element instanceof EducationSchoolImpl? element as EducationSchoolImpl:new EducationSchoolImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationSchoolImpl>("schools", schoolsArrValue);
        }
        if(this.showInAddressList){
            writer.writeBooleanValue("showInAddressList", this.showInAddressList);
        }
        if(this.student){
            writer.writeObjectValue<EducationStudentImpl>("student", (this.student instanceof EducationStudentImpl? this.student as EducationStudentImpl: new EducationStudentImpl(this.student)));
        }
        if(this.surname){
            writer.writeStringValue("surname", this.surname);
        }
        if(this.taughtClasses && this.taughtClasses.length != 0){        const taughtClassesArrValue: EducationClassImpl[] = [];
        this.taughtClasses?.forEach(element => {
            taughtClassesArrValue.push((element instanceof EducationClassImpl? element as EducationClassImpl:new EducationClassImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationClassImpl>("taughtClasses", taughtClassesArrValue);
        }
        if(this.teacher){
            writer.writeObjectValue<EducationTeacherImpl>("teacher", (this.teacher instanceof EducationTeacherImpl? this.teacher as EducationTeacherImpl: new EducationTeacherImpl(this.teacher)));
        }
        if(this.usageLocation){
            writer.writeStringValue("usageLocation", this.usageLocation);
        }
        if(this.user){
            writer.writeObjectValue<UserImpl>("user", (this.user instanceof UserImpl? this.user as UserImpl: new UserImpl(this.user)));
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        if(this.userType){
            writer.writeStringValue("userType", this.userType);
        }
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
        if(value) {
            this._showInAddressList = value;
        }
    };
    /**
     * Gets the student property value. If the primary role is student, this block will contain student specific data.
     * @returns a EducationStudentInterface
     */
    public get student() {
        return this._student;
    };
    /**
     * Sets the student property value. If the primary role is student, this block will contain student specific data.
     * @param value Value to set for the student property.
     */
    public set student(value: EducationStudent | undefined) {
        if(value) {
            this._student = value instanceof EducationStudentImpl? value as EducationStudentImpl: new EducationStudentImpl(value);
        }
    };
    /**
     * Gets the surname property value. The user's surname (family name or last name). Supports /$filter.
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. The user's surname (family name or last name). Supports /$filter.
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        if(value) {
            this._surname = value;
        }
    };
    /**
     * Gets the taughtClasses property value. Classes for which the user is a teacher.
     * @returns a EducationClassInterface
     */
    public get taughtClasses() {
        return this._taughtClasses;
    };
    /**
     * Sets the taughtClasses property value. Classes for which the user is a teacher.
     * @param value Value to set for the taughtClasses property.
     */
    public set taughtClasses(value: EducationClass[] | undefined) {
        if(value) {
            const taughtClassesArrValue: EducationClassImpl[] = [];
            this.taughtClasses?.forEach(element => {
                taughtClassesArrValue.push((element instanceof EducationClassImpl? element as EducationClassImpl:new EducationClassImpl(element)));
            });
            this._taughtClasses = taughtClassesArrValue;
        }
    };
    /**
     * Gets the teacher property value. If the primary role is teacher, this block will contain teacher specific data.
     * @returns a EducationTeacherInterface
     */
    public get teacher() {
        return this._teacher;
    };
    /**
     * Sets the teacher property value. If the primary role is teacher, this block will contain teacher specific data.
     * @param value Value to set for the teacher property.
     */
    public set teacher(value: EducationTeacher | undefined) {
        if(value) {
            this._teacher = value instanceof EducationTeacherImpl? value as EducationTeacherImpl: new EducationTeacherImpl(value);
        }
    };
    /**
     * Gets the usageLocation property value. A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable. Supports /$filter.
     * @returns a string
     */
    public get usageLocation() {
        return this._usageLocation;
    };
    /**
     * Sets the usageLocation property value. A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable. Supports /$filter.
     * @param value Value to set for the usageLocation property.
     */
    public set usageLocation(value: string | undefined) {
        if(value) {
            this._usageLocation = value;
        }
    };
    /**
     * Gets the user property value. The directory user that corresponds to this user.
     * @returns a UserInterface
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. The directory user that corresponds to this user.
     * @param value Value to set for the user property.
     */
    public set user(value: User | undefined) {
        if(value) {
            this._user = value instanceof UserImpl? value as UserImpl: new UserImpl(value);
        }
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional details.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional details.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
    /**
     * Gets the userType property value. A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports /$filter.
     * @returns a string
     */
    public get userType() {
        return this._userType;
    };
    /**
     * Sets the userType property value. A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports /$filter.
     * @param value Value to set for the userType property.
     */
    public set userType(value: string | undefined) {
        if(value) {
            this._userType = value;
        }
    };
}
