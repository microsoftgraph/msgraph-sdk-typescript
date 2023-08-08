import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {EducationUser} from './educationUser';
import type {EducationUserCollectionResponse} from './educationUserCollectionResponse';
import {serializeEducationUser} from './serializeEducationUser';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationUserCollectionResponse(educationUserCollectionResponse: EducationUserCollectionResponse | undefined = {} as EducationUserCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(educationUserCollectionResponse),
        "value": n => { educationUserCollectionResponse.value = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
    }
}
