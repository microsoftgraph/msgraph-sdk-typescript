import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {ExternalConnection} from './externalConnection';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalConnectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ExternalConnection[] | undefined;
}
