import {EducationClass} from './educationClass';
import {EducationClassCollectionResponse} from './educationClassCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationClass} from './serializeEducationClass';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationClassCollectionResponse(educationClassCollectionResponse: EducationClassCollectionResponse | undefined = {} as EducationClassCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationClassCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationClass>("value", educationClassCollectionResponse.value, serializeEducationClass);
}
