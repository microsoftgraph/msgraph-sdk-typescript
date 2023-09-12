import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type HostCookie } from './hostCookie';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface HostCookieCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: HostCookie[] | undefined;
}
