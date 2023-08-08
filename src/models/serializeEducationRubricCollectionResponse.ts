import type {EducationRubric} from './educationRubric';
import type {EducationRubricCollectionResponse} from './educationRubricCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationRubric} from './serializeEducationRubric';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationRubricCollectionResponse(writer: SerializationWriter, educationRubricCollectionResponse: EducationRubricCollectionResponse | undefined = {} as EducationRubricCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationRubricCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationRubric>("value", educationRubricCollectionResponse.value, serializeEducationRubric);
}
