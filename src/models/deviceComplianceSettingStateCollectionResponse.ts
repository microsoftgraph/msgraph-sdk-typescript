import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceComplianceSettingState } from './deviceComplianceSettingState';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceComplianceSettingStateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceComplianceSettingState[] | undefined;
}
