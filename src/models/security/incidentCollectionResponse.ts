import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Incident} from './incident';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IncidentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Incident[] | undefined;
}
