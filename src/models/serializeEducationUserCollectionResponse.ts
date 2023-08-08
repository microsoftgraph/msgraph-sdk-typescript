import type {EducationUser} from './educationUser';
import type {EducationUserCollectionResponse} from './educationUserCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationUser} from './serializeEducationUser';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationUserCollectionResponse(writer: SerializationWriter, educationUserCollectionResponse: EducationUserCollectionResponse | undefined = {} as EducationUserCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationUserCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationUser>("value", educationUserCollectionResponse.value, serializeEducationUser);
}
