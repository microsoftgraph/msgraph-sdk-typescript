import { type AndroidLobApp } from './androidLobApp';
import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AndroidLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AndroidLobApp[] | undefined;
}
