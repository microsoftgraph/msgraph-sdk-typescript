import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EducationSchool} from './educationSchool';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSchoolCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationSchool[] | undefined;
}
