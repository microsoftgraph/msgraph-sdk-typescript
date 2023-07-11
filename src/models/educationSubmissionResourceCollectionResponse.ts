import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationSubmissionResource[] | undefined;
}
