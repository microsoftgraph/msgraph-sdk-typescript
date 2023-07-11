import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintConnector} from './printConnector';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintConnectorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintConnector[] | undefined;
}
