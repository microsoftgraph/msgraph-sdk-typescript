import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EducationAssignment} from './educationAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationAssignment[] | undefined;
}
