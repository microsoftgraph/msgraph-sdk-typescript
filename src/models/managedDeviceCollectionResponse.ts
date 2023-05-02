import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedDevice} from './managedDevice';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ManagedDevice[] | undefined;
}
