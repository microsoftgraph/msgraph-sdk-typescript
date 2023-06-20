import {EducationUser} from './educationUser';
import {EducationUserCollectionResponse} from './educationUserCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationUser} from './serializeEducationUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationUserCollectionResponse(educationUserCollectionResponse: EducationUserCollectionResponse | undefined = {} as EducationUserCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationUserCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationUser>("value", educationUserCollectionResponse.value, serializeEducationUser);
}
