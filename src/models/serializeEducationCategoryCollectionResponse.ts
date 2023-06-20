import {EducationCategory} from './educationCategory';
import {EducationCategoryCollectionResponse} from './educationCategoryCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationCategory} from './serializeEducationCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationCategoryCollectionResponse(educationCategoryCollectionResponse: EducationCategoryCollectionResponse | undefined = {} as EducationCategoryCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationCategory>("value", educationCategoryCollectionResponse.value, serializeEducationCategory);
}
