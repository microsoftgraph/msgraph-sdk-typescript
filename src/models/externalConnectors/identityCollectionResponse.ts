import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Identity[] | undefined;
}
