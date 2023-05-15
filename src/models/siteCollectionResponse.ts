import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Site} from './site';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SiteCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Site[] | undefined;
}
