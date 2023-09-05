import { createEducationClassFromDiscriminatorValue } from './createEducationClassFromDiscriminatorValue';
import { createEducationSchoolFromDiscriminatorValue } from './createEducationSchoolFromDiscriminatorValue';
import { createEducationUserFromDiscriminatorValue } from './createEducationUserFromDiscriminatorValue';
import { type EducationClass } from './educationClass';
import { type EducationRoot } from './educationRoot';
import { type EducationSchool } from './educationSchool';
import { type EducationUser } from './educationUser';
import { serializeEducationClass } from './serializeEducationClass';
import { serializeEducationSchool } from './serializeEducationSchool';
import { serializeEducationUser } from './serializeEducationUser';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRoot(educationRoot: EducationRoot | undefined = {} as EducationRoot) : Record<string, (node: ParseNode) => void> {
    return {
        "classes": n => { educationRoot.classes = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
        "me": n => { educationRoot.me = n.getObjectValue<EducationUser>(createEducationUserFromDiscriminatorValue); },
        "@odata.type": n => { educationRoot.odataType = n.getStringValue(); },
        "schools": n => { educationRoot.schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
        "users": n => { educationRoot.users = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
    }
}
