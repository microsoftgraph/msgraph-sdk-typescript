import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EducationRubric} from './educationRubric';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRubricCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: EducationRubric[] | undefined;
}
