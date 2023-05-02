import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {EducationClass} from './educationClass';
import {EducationClassCollectionResponse} from './educationClassCollectionResponse';
import {serializeEducationClass} from './serializeEducationClass';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationClassCollectionResponse(educationClassCollectionResponse: EducationClassCollectionResponse | undefined = {} as EducationClassCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationClassCollectionResponse),
        "value": n => { educationClassCollectionResponse.value = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
    }
}
