import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BrowserSiteList} from './browserSiteList';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSiteListCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BrowserSiteList[] | undefined;
}
