import { type EducationClass } from './educationClass';
import { type EducationRoot } from './educationRoot';
import { type EducationSchool } from './educationSchool';
import { type EducationUser } from './educationUser';
import { serializeEducationClass } from './serializeEducationClass';
import { serializeEducationSchool } from './serializeEducationSchool';
import { serializeEducationUser } from './serializeEducationUser';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationRoot(writer: SerializationWriter, educationRoot: EducationRoot | undefined = {} as EducationRoot) : void {
        writer.writeCollectionOfObjectValues<EducationClass>("classes", educationRoot.classes, serializeEducationClass);
        writer.writeObjectValue<EducationUser>("me", educationRoot.me, serializeEducationUser);
        writer.writeStringValue("@odata.type", educationRoot.odataType);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", educationRoot.schools, serializeEducationSchool);
        writer.writeCollectionOfObjectValues<EducationUser>("users", educationRoot.users, serializeEducationUser);
        writer.writeAdditionalData(educationRoot.additionalData);
}
