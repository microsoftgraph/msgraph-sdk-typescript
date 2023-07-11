import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TimeOff} from './timeOff';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TimeOff[] | undefined;
}
