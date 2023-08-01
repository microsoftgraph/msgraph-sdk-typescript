import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ManagedEBookAssignment} from './managedEBookAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBookAssignmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedEBookAssignment[] | undefined;
}
