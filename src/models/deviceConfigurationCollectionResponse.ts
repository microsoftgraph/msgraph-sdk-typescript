import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceConfiguration} from './deviceConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfiguration[] | undefined;
}
