import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyServicePrincipalHistoryItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RiskyServicePrincipalHistoryItem[] | undefined;
}
