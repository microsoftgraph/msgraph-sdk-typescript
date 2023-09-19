import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ManagedIOSLobApp } from './managedIOSLobApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedIOSLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedIOSLobApp[] | undefined;
}
