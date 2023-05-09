import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Device} from './device';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Device[] | undefined;
}
