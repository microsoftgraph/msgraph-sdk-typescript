import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedEBook} from './managedEBook';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ManagedEBook[] | undefined;
}
