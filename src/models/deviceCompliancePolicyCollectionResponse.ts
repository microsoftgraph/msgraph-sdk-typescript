import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCompliancePolicy[] | undefined;
}
