import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ManagedDevice} from './managedDevice';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedDevice[] | undefined;
}
