import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {DeviceInstallState} from './deviceInstallState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceInstallStateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceInstallState[] | undefined;
}
