import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RiskyServicePrincipalHistoryItem} from './riskyServicePrincipalHistoryItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyServicePrincipalHistoryItemCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: RiskyServicePrincipalHistoryItem[] | undefined;
}
