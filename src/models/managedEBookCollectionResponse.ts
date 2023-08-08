import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ManagedEBook} from './managedEBook';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedEBook[] | undefined;
}
