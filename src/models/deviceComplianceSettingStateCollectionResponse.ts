import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceSettingStateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceComplianceSettingState[] | undefined;
}
