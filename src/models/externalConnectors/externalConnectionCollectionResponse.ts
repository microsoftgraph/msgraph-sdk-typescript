import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {ExternalConnection} from './externalConnection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalConnectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalConnection[] | undefined;
}
