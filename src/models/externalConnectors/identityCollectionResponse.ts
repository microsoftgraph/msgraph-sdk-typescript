import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Identity} from './identity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Identity[] | undefined;
}
