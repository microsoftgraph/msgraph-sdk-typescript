import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyStateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCompliancePolicyState[] | undefined;
}
