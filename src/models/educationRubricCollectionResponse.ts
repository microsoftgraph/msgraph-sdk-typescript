import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type EducationRubric } from './educationRubric';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationRubricCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationRubric[] | undefined;
}
