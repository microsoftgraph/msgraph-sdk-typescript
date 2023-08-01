import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EducationCategory} from './educationCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationCategory[] | undefined;
}
