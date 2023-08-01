import type {EducationClass} from './educationClass';
import type {EducationClassCollectionResponse} from './educationClassCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationClass} from './serializeEducationClass';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationClassCollectionResponse(writer: SerializationWriter, educationClassCollectionResponse: EducationClassCollectionResponse | undefined = {} as EducationClassCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationClassCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationClass>("value", educationClassCollectionResponse.value, serializeEducationClass);
}
