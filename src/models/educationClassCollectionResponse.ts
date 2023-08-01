import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EducationClass} from './educationClass';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationClassCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationClass[] | undefined;
}
