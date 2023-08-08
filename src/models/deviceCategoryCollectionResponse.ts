import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceCategory} from './deviceCategory';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCategory[] | undefined;
}
