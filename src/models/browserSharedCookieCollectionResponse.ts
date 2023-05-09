import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BrowserSharedCookie} from './browserSharedCookie';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSharedCookieCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: BrowserSharedCookie[] | undefined;
}
