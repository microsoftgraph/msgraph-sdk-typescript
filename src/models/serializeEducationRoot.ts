import {EducationClass} from './educationClass';
import {EducationRoot} from './educationRoot';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {serializeEducationClass} from './serializeEducationClass';
import {serializeEducationSchool} from './serializeEducationSchool';
import {serializeEducationUser} from './serializeEducationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRoot(educationRoot: EducationRoot | undefined = {} as EducationRoot, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<EducationClass>("classes", educationRoot.classes, serializeEducationClass);
        writer.writeObjectValue<EducationUser>("me", educationRoot.me, serializeEducationUser);
        writer.writeStringValue("@odata.type", educationRoot.odataType);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", educationRoot.schools, serializeEducationSchool);
        writer.writeCollectionOfObjectValues<EducationUser>("users", educationRoot.users, serializeEducationUser);
        writer.writeAdditionalData(educationRoot.additionalData);
}
