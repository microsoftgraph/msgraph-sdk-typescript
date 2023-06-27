import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceCategory} from './deviceCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCategory[] | undefined;
}
