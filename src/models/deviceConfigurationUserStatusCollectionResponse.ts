import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceConfigurationUserStatus } from './deviceConfigurationUserStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationUserStatusCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfigurationUserStatus[] | undefined;
}
