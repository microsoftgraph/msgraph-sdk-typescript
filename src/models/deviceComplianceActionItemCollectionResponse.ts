import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceActionItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceComplianceActionItem[] | undefined;
}
