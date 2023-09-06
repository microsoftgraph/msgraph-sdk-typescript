import { type AdministrativeUnit } from './administrativeUnit';
import { type EducationClass } from './educationClass';
import { type EducationSchool } from './educationSchool';
import { type EducationUser } from './educationUser';
import { type IdentitySet } from './identitySet';
import { type PhysicalAddress } from './physicalAddress';
import { serializeAdministrativeUnit } from './serializeAdministrativeUnit';
import { serializeEducationClass } from './serializeEducationClass';
import { serializeEducationOrganization } from './serializeEducationOrganization';
import { serializeEducationUser } from './serializeEducationUser';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializePhysicalAddress } from './serializePhysicalAddress';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
