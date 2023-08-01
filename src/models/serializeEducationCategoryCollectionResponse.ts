import type {EducationCategory} from './educationCategory';
import type {EducationCategoryCollectionResponse} from './educationCategoryCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEducationCategory} from './serializeEducationCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationCategoryCollectionResponse(writer: SerializationWriter, educationCategoryCollectionResponse: EducationCategoryCollectionResponse | undefined = {} as EducationCategoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, educationCategoryCollectionResponse)
        writer.writeCollectionOfObjectValues<EducationCategory>("value", educationCategoryCollectionResponse.value, serializeEducationCategory);
}
