import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PrintConnector} from './printConnector';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintConnector[] | undefined;
}
