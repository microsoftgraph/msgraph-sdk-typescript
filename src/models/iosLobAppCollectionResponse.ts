import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type IosLobApp } from './iosLobApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface IosLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IosLobApp[] | undefined;
}
