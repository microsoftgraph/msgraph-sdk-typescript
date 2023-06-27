import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCompliancePolicy[] | undefined;
}
