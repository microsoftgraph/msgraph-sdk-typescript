import {AdministrativeUnit} from './administrativeUnit';
import {EducationClass} from './educationClass';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {IdentitySet} from './identitySet';
import {PhysicalAddress} from './physicalAddress';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeEducationClass} from './serializeEducationClass';
import {serializeEducationOrganization} from './serializeEducationOrganization';
import {serializeEducationUser} from './serializeEducationUser';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationSchool(writer: SerializationWriter, educationSchool: EducationSchool | undefined = {} as EducationSchool) : void {
        serializeEducationOrganization(writer, educationSchool)
        writer.writeObjectValue<PhysicalAddress>("address", educationSchool.address, serializePhysicalAddress);
        writer.writeObjectValue<AdministrativeUnit>("administrativeUnit", educationSchool.administrativeUnit, serializeAdministrativeUnit);
        writer.writeCollectionOfObjectValues<EducationClass>("classes", educationSchool.classes, serializeEducationClass);
        writer.writeObjectValue<IdentitySet>("createdBy", educationSchool.createdBy, serializeIdentitySet);
        writer.writeStringValue("externalId", educationSchool.externalId);
        writer.writeStringValue("externalPrincipalId", educationSchool.externalPrincipalId);
        writer.writeStringValue("fax", educationSchool.fax);
        writer.writeStringValue("highestGrade", educationSchool.highestGrade);
        writer.writeStringValue("lowestGrade", educationSchool.lowestGrade);
        writer.writeStringValue("phone", educationSchool.phone);
        writer.writeStringValue("principalEmail", educationSchool.principalEmail);
        writer.writeStringValue("principalName", educationSchool.principalName);
        writer.writeStringValue("schoolNumber", educationSchool.schoolNumber);
        writer.writeCollectionOfObjectValues<EducationUser>("users", educationSchool.users, serializeEducationUser);
}
