import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EducationSchool} from './educationSchool';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSchoolCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationSchool[] | undefined;
}
