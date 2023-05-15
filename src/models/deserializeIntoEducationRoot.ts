import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {EducationClass} from './educationClass';
import {EducationRoot} from './educationRoot';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {serializeEducationClass} from './serializeEducationClass';
import {serializeEducationSchool} from './serializeEducationSchool';
import {serializeEducationUser} from './serializeEducationUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationRoot(educationRoot: EducationRoot | undefined = {} as EducationRoot) : Record<string, (node: ParseNode) => void> {
    return {
        "classes": n => { educationRoot.classes = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
        "me": n => { educationRoot.me = n.getObjectValue<EducationUser>(createEducationUserFromDiscriminatorValue); },
        "@odata.type": n => { educationRoot.odataType = n.getStringValue(); },
        "schools": n => { educationRoot.schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
        "users": n => { educationRoot.users = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
    }
}
