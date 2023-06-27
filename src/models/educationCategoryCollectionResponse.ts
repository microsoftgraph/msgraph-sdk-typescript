import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EducationCategory} from './educationCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationCategory[] | undefined;
}
