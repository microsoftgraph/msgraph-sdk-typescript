import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Incident} from './incident';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IncidentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Incident[] | undefined;
}
