import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceConfigurationStateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfigurationState[] | undefined;
}
