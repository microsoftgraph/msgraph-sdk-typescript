import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MacOSLobApp } from './macOSLobApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MacOSLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MacOSLobApp[] | undefined;
}
