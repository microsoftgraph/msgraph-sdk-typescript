import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {SiteSource} from './siteSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SiteSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: SiteSource[] | undefined;
}
