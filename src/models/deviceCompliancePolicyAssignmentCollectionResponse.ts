import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCompliancePolicyAssignment[] | undefined;
}
