import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosUpdateDeviceStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: IosUpdateDeviceStatus[] | undefined;
}
