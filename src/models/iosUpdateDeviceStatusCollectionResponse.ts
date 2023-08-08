import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IosUpdateDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IosUpdateDeviceStatus[] | undefined;
}
