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
import {deserializeIntoEntity} from './deserializeIntoEntity';
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
import {PasswordProfile} from './passwordProfile';
import {PhysicalAddress} from './physicalAddress';
import {ProvisionedPlan} from './provisionedPlan';
import {RelatedContact} from './relatedContact';
import {serializeAssignedLicense} from './serializeAssignedLicense';
import {serializeAssignedPlan} from './serializeAssignedPlan';
import {serializeEducationAssignment} from './serializeEducationAssignment';
import {serializeEducationClass} from './serializeEducationClass';
import {serializeEducationOnPremisesInfo} from './serializeEducationOnPremisesInfo';
import {serializeEducationRubric} from './serializeEducationRubric';
import {serializeEducationSchool} from './serializeEducationSchool';
import {serializeEducationStudent} from './serializeEducationStudent';
import {serializeEducationTeacher} from './serializeEducationTeacher';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePasswordProfile} from './serializePasswordProfile';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {serializeProvisionedPlan} from './serializeProvisionedPlan';
import {serializeRelatedContact} from './serializeRelatedContact';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationUser(educationUser: EducationUser | undefined = {} as EducationUser) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationUser),
        "accountEnabled": n => { educationUser.accountEnabled = n.getBooleanValue(); },
        "assignedLicenses": n => { educationUser.assignedLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
        "assignedPlans": n => { educationUser.assignedPlans = n.getCollectionOfObjectValues<AssignedPlan>(createAssignedPlanFromDiscriminatorValue); },
        "assignments": n => { educationUser.assignments = n.getCollectionOfObjectValues<EducationAssignment>(createEducationAssignmentFromDiscriminatorValue); },
        "businessPhones": n => { educationUser.businessPhones = n.getCollectionOfPrimitiveValues<string>(); },
        "classes": n => { educationUser.classes = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
        "createdBy": n => { educationUser.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "department": n => { educationUser.department = n.getStringValue(); },
        "displayName": n => { educationUser.displayName = n.getStringValue(); },
        "externalSource": n => { educationUser.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
        "externalSourceDetail": n => { educationUser.externalSourceDetail = n.getStringValue(); },
        "givenName": n => { educationUser.givenName = n.getStringValue(); },
        "mail": n => { educationUser.mail = n.getStringValue(); },
        "mailingAddress": n => { educationUser.mailingAddress = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "mailNickname": n => { educationUser.mailNickname = n.getStringValue(); },
        "middleName": n => { educationUser.middleName = n.getStringValue(); },
        "mobilePhone": n => { educationUser.mobilePhone = n.getStringValue(); },
        "officeLocation": n => { educationUser.officeLocation = n.getStringValue(); },
        "onPremisesInfo": n => { educationUser.onPremisesInfo = n.getObjectValue<EducationOnPremisesInfo>(createEducationOnPremisesInfoFromDiscriminatorValue); },
        "passwordPolicies": n => { educationUser.passwordPolicies = n.getStringValue(); },
        "passwordProfile": n => { educationUser.passwordProfile = n.getObjectValue<PasswordProfile>(createPasswordProfileFromDiscriminatorValue); },
        "preferredLanguage": n => { educationUser.preferredLanguage = n.getStringValue(); },
        "primaryRole": n => { educationUser.primaryRole = n.getEnumValue<EducationUserRole>(EducationUserRole); },
        "provisionedPlans": n => { educationUser.provisionedPlans = n.getCollectionOfObjectValues<ProvisionedPlan>(createProvisionedPlanFromDiscriminatorValue); },
        "refreshTokensValidFromDateTime": n => { educationUser.refreshTokensValidFromDateTime = n.getDateValue(); },
        "relatedContacts": n => { educationUser.relatedContacts = n.getCollectionOfObjectValues<RelatedContact>(createRelatedContactFromDiscriminatorValue); },
        "residenceAddress": n => { educationUser.residenceAddress = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "rubrics": n => { educationUser.rubrics = n.getCollectionOfObjectValues<EducationRubric>(createEducationRubricFromDiscriminatorValue); },
        "schools": n => { educationUser.schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
        "showInAddressList": n => { educationUser.showInAddressList = n.getBooleanValue(); },
        "student": n => { educationUser.student = n.getObjectValue<EducationStudent>(createEducationStudentFromDiscriminatorValue); },
        "surname": n => { educationUser.surname = n.getStringValue(); },
        "taughtClasses": n => { educationUser.taughtClasses = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
        "teacher": n => { educationUser.teacher = n.getObjectValue<EducationTeacher>(createEducationTeacherFromDiscriminatorValue); },
        "usageLocation": n => { educationUser.usageLocation = n.getStringValue(); },
        "user": n => { educationUser.user = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "userPrincipalName": n => { educationUser.userPrincipalName = n.getStringValue(); },
        "userType": n => { educationUser.userType = n.getStringValue(); },
    }
}
