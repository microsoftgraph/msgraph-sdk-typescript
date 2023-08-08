import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {TimeOff} from './timeOff';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TimeOff[] | undefined;
}
