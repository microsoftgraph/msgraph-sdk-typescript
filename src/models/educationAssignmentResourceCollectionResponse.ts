import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {EducationAssignmentResource} from './educationAssignmentResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationAssignmentResource[] | undefined;
}
