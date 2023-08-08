import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {HostTracker} from './hostTracker';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface HostTrackerCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: HostTracker[] | undefined;
}
