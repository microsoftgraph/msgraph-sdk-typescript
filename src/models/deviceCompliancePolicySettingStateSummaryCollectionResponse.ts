import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceCompliancePolicySettingStateSummary } from './deviceCompliancePolicySettingStateSummary';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicySettingStateSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCompliancePolicySettingStateSummary[] | undefined;
}
