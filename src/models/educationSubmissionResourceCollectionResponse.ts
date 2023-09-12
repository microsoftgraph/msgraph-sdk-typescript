import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type EducationSubmissionResource } from './educationSubmissionResource';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationSubmissionResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationSubmissionResource[] | undefined;
}
