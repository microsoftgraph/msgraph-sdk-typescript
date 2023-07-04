import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {HostTracker} from './hostTracker';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostTrackerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: HostTracker[] | undefined;
}
