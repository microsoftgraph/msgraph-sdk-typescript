import type {AdministrativeUnit} from './administrativeUnit';
import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {deserializeIntoEducationOrganization} from './deserializeIntoEducationOrganization';
import type {EducationClass} from './educationClass';
import type {EducationSchool} from './educationSchool';
import type {EducationUser} from './educationUser';
import type {IdentitySet} from './identitySet';
import type {PhysicalAddress} from './physicalAddress';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeEducationClass} from './serializeEducationClass';
import {serializeEducationUser} from './serializeEducationUser';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationSchool(educationSchool: EducationSchool | undefined = {} as EducationSchool) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEducationOrganization(educationSchool),
        "address": n => { educationSchool.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
        "administrativeUnit": n => { educationSchool.administrativeUnit = n.getObjectValue<AdministrativeUnit>(createAdministrativeUnitFromDiscriminatorValue); },
        "classes": n => { educationSchool.classes = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
        "createdBy": n => { educationSchool.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "externalId": n => { educationSchool.externalId = n.getStringValue(); },
        "externalPrincipalId": n => { educationSchool.externalPrincipalId = n.getStringValue(); },
        "fax": n => { educationSchool.fax = n.getStringValue(); },
        "highestGrade": n => { educationSchool.highestGrade = n.getStringValue(); },
        "lowestGrade": n => { educationSchool.lowestGrade = n.getStringValue(); },
        "phone": n => { educationSchool.phone = n.getStringValue(); },
        "principalEmail": n => { educationSchool.principalEmail = n.getStringValue(); },
        "principalName": n => { educationSchool.principalName = n.getStringValue(); },
        "schoolNumber": n => { educationSchool.schoolNumber = n.getStringValue(); },
        "users": n => { educationSchool.users = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
    }
}
