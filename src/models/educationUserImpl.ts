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
export class EducationUserImpl extends EntityImpl implements EducationUser, Parsable {
    /** True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter. */
    public accountEnabled?: boolean | undefined;
    /** The licenses that are assigned to the user. Not nullable. */
    public assignedLicenses?: AssignedLicense[] | undefined;
    /** The plans that are assigned to the user. Read-only. Not nullable. */
    public assignedPlans?: AssignedPlan[] | undefined;
    /** List of assignments for the user. Nullable. */
    public assignments?: EducationAssignment[] | undefined;
    /** The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property. */
    public businessPhones?: string[] | undefined;
    /** Classes to which the user belongs. Nullable. */
    public classes?: EducationClass[] | undefined;
    /** Entity who created the user. */
    public createdBy?: IdentitySet | undefined;
    /** The name for the department in which the user works. Supports /$filter. */
    public department?: string | undefined;
    /** The name displayed in the address book for the user. Supports $filter and $orderby. */
    public displayName?: string | undefined;
    /** The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual. */
    public externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    public externalSourceDetail?: string | undefined;
    /** The given name (first name) of the user. Supports /$filter. */
    public givenName?: string | undefined;
    /** The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter. */
    public mail?: string | undefined;
    /** Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources. */
    public mailingAddress?: PhysicalAddress | undefined;
    /** The mail alias for the user. This property must be specified when a user is created. Supports /$filter. */
    public mailNickname?: string | undefined;
    /** The middle name of user. */
    public middleName?: string | undefined;
    /** The primary cellular telephone number for the user. */
    public mobilePhone?: string | undefined;
    /** The officeLocation property */
    public officeLocation?: string | undefined;
    /** Additional information used to associate the AAD user with it's Active Directory counterpart. */
    public onPremisesInfo?: EducationOnPremisesInfo | undefined;
    /** Specifies password policies for the user. See standard [user] resource for additional details. */
    public passwordPolicies?: string | undefined;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. See standard [user] resource for additional details. */
    public passwordProfile?: PasswordProfile | undefined;
    /** The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'. */
    public preferredLanguage?: string | undefined;
    /** Default role for a user. The user's role might be different in an individual class. Possible values are: student, teacher, faculty. Supports /$filter. */
    public primaryRole?: EducationUserRole | undefined;
    /** The plans that are provisioned for the user. Read-only. Not nullable. */
    public provisionedPlans?: ProvisionedPlan[] | undefined;
    /** The refreshTokensValidFromDateTime property */
    public refreshTokensValidFromDateTime?: Date | undefined;
    /** Related records related to the user. Possible relationships are parent, relative, aide, doctor, guardian, child, other, unknownFutureValue */
    public relatedContacts?: RelatedContact[] | undefined;
    /** Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources. */
    public residenceAddress?: PhysicalAddress | undefined;
    /** When set, the grading rubric attached to the assignment. */
    public rubrics?: EducationRubric[] | undefined;
    /** Schools to which the user belongs. Nullable. */
    public schools?: EducationSchool[] | undefined;
    /** True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. */
    public showInAddressList?: boolean | undefined;
    /** If the primary role is student, this block will contain student specific data. */
    public student?: EducationStudent | undefined;
    /** The user's surname (family name or last name). Supports /$filter. */
    public surname?: string | undefined;
    /** Classes for which the user is a teacher. */
    public taughtClasses?: EducationClass[] | undefined;
    /** If the primary role is teacher, this block will contain teacher specific data. */
    public teacher?: EducationTeacher | undefined;
    /** A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable. Supports /$filter. */
    public usageLocation?: string | undefined;
    /** The directory user that corresponds to this user. */
    public user?: User | undefined;
    /** The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional details. */
    public userPrincipalName?: string | undefined;
    /** A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports /$filter. */
    public userType?: string | undefined;
    /**
     * Instantiates a new educationUser and sets the default values.
     * @param educationUserParameterValue 
     */
    public constructor(educationUserParameterValue?: EducationUser | undefined) {
        super();
        this.accountEnabled = educationUserParameterValue?.accountEnabled ;
        this.assignedLicenses = educationUserParameterValue?.assignedLicenses ;
        this.assignedPlans = educationUserParameterValue?.assignedPlans ;
        this.assignments = educationUserParameterValue?.assignments ;
        this.businessPhones = educationUserParameterValue?.businessPhones ;
        this.classes = educationUserParameterValue?.classes ;
        this.createdBy = educationUserParameterValue?.createdBy ;
        this.department = educationUserParameterValue?.department ;
        this.displayName = educationUserParameterValue?.displayName ;
        this.externalSource = educationUserParameterValue?.externalSource ;
        this.externalSourceDetail = educationUserParameterValue?.externalSourceDetail ;
        this.givenName = educationUserParameterValue?.givenName ;
        this.mail = educationUserParameterValue?.mail ;
        this.mailingAddress = educationUserParameterValue?.mailingAddress ;
        this.mailNickname = educationUserParameterValue?.mailNickname ;
        this.middleName = educationUserParameterValue?.middleName ;
        this.mobilePhone = educationUserParameterValue?.mobilePhone ;
        this.officeLocation = educationUserParameterValue?.officeLocation ;
        this.onPremisesInfo = educationUserParameterValue?.onPremisesInfo ;
        this.passwordPolicies = educationUserParameterValue?.passwordPolicies ;
        this.passwordProfile = educationUserParameterValue?.passwordProfile ;
        this.preferredLanguage = educationUserParameterValue?.preferredLanguage ;
        this.primaryRole = educationUserParameterValue?.primaryRole ;
        this.provisionedPlans = educationUserParameterValue?.provisionedPlans ;
        this.refreshTokensValidFromDateTime = educationUserParameterValue?.refreshTokensValidFromDateTime ;
        this.relatedContacts = educationUserParameterValue?.relatedContacts ;
        this.residenceAddress = educationUserParameterValue?.residenceAddress ;
        this.rubrics = educationUserParameterValue?.rubrics ;
        this.schools = educationUserParameterValue?.schools ;
        this.showInAddressList = educationUserParameterValue?.showInAddressList ;
        this.student = educationUserParameterValue?.student ;
        this.surname = educationUserParameterValue?.surname ;
        this.taughtClasses = educationUserParameterValue?.taughtClasses ;
        this.teacher = educationUserParameterValue?.teacher ;
        this.usageLocation = educationUserParameterValue?.usageLocation ;
        this.user = educationUserParameterValue?.user ;
        this.userPrincipalName = educationUserParameterValue?.userPrincipalName ;
        this.userType = educationUserParameterValue?.userType ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountEnabled){
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        }
        if(this.assignedLicenses && this.assignedLicenses.length != 0){        const assignedLicensesArrValue: AssignedLicenseImpl[] = []; this.assignedLicenses?.forEach(element => {assignedLicensesArrValue.push(new AssignedLicenseImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("assignedLicenses", assignedLicensesArrValue);
        }
        if(this.assignedPlans && this.assignedPlans.length != 0){        const assignedPlansArrValue: AssignedPlanImpl[] = []; this.assignedPlans?.forEach(element => {assignedPlansArrValue.push(new AssignedPlanImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedPlanImpl>("assignedPlans", assignedPlansArrValue);
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: EducationAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new EducationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<EducationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.businessPhones){
        writer.writeCollectionOfPrimitiveValues<string>("businessPhones", this.businessPhones);
        }
        if(this.classes && this.classes.length != 0){        const classesArrValue: EducationClassImpl[] = []; this.classes?.forEach(element => {classesArrValue.push(new EducationClassImpl(element));});
        writer.writeCollectionOfObjectValues<EducationClassImpl>("classes", classesArrValue);
        }
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
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
        writer.writeObjectValue<PhysicalAddressImpl>("mailingAddress", new PhysicalAddressImpl(this.mailingAddress));
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
        writer.writeObjectValue<EducationOnPremisesInfoImpl>("onPremisesInfo", new EducationOnPremisesInfoImpl(this.onPremisesInfo));
        }
        if(this.passwordPolicies){
        writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        }
        if(this.passwordProfile){
        writer.writeObjectValue<PasswordProfileImpl>("passwordProfile", new PasswordProfileImpl(this.passwordProfile));
        }
        if(this.preferredLanguage){
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        }
        if(this.primaryRole){
        writer.writeEnumValue<EducationUserRole>("primaryRole", this.primaryRole);
        }
        if(this.provisionedPlans && this.provisionedPlans.length != 0){        const provisionedPlansArrValue: ProvisionedPlanImpl[] = []; this.provisionedPlans?.forEach(element => {provisionedPlansArrValue.push(new ProvisionedPlanImpl(element));});
        writer.writeCollectionOfObjectValues<ProvisionedPlanImpl>("provisionedPlans", provisionedPlansArrValue);
        }
        if(this.refreshTokensValidFromDateTime){
        writer.writeDateValue("refreshTokensValidFromDateTime", this.refreshTokensValidFromDateTime);
        }
        if(this.relatedContacts && this.relatedContacts.length != 0){        const relatedContactsArrValue: RelatedContactImpl[] = []; this.relatedContacts?.forEach(element => {relatedContactsArrValue.push(new RelatedContactImpl(element));});
        writer.writeCollectionOfObjectValues<RelatedContactImpl>("relatedContacts", relatedContactsArrValue);
        }
        if(this.residenceAddress){
        writer.writeObjectValue<PhysicalAddressImpl>("residenceAddress", new PhysicalAddressImpl(this.residenceAddress));
        }
        if(this.rubrics && this.rubrics.length != 0){        const rubricsArrValue: EducationRubricImpl[] = []; this.rubrics?.forEach(element => {rubricsArrValue.push(new EducationRubricImpl(element));});
        writer.writeCollectionOfObjectValues<EducationRubricImpl>("rubrics", rubricsArrValue);
        }
        if(this.schools && this.schools.length != 0){        const schoolsArrValue: EducationSchoolImpl[] = []; this.schools?.forEach(element => {schoolsArrValue.push(new EducationSchoolImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSchoolImpl>("schools", schoolsArrValue);
        }
        if(this.showInAddressList){
        writer.writeBooleanValue("showInAddressList", this.showInAddressList);
        }
        if(this.student){
        writer.writeObjectValue<EducationStudentImpl>("student", new EducationStudentImpl(this.student));
        }
        if(this.surname){
        writer.writeStringValue("surname", this.surname);
        }
        if(this.taughtClasses && this.taughtClasses.length != 0){        const taughtClassesArrValue: EducationClassImpl[] = []; this.taughtClasses?.forEach(element => {taughtClassesArrValue.push(new EducationClassImpl(element));});
        writer.writeCollectionOfObjectValues<EducationClassImpl>("taughtClasses", taughtClassesArrValue);
        }
        if(this.teacher){
        writer.writeObjectValue<EducationTeacherImpl>("teacher", new EducationTeacherImpl(this.teacher));
        }
        if(this.usageLocation){
        writer.writeStringValue("usageLocation", this.usageLocation);
        }
        if(this.user){
        writer.writeObjectValue<UserImpl>("user", new UserImpl(this.user));
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        if(this.userType){
        writer.writeStringValue("userType", this.userType);
        }
    };
}
