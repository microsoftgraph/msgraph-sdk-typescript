import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Win32LobApp } from './win32LobApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Win32LobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Win32LobApp[] | undefined;
}
