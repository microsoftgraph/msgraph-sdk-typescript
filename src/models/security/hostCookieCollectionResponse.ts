import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {HostCookie} from './hostCookie';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostCookieCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: HostCookie[] | undefined;
}
