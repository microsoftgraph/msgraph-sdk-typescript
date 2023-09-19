import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ManagedAndroidLobApp } from './managedAndroidLobApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedAndroidLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedAndroidLobApp[] | undefined;
}
