import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceActionItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceComplianceActionItem[] | undefined;
}
