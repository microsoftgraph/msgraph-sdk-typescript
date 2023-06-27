import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EnrollmentConfigurationAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EnrollmentConfigurationAssignment[] | undefined;
}
