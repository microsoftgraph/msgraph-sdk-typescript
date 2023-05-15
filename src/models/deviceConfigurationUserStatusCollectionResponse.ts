import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationUserStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DeviceConfigurationUserStatus[] | undefined;
}
