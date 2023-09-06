import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DeviceConfigurationState } from './deviceConfigurationState';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfigurationState[] | undefined;
}
