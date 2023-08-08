import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ManagedMobileLobApp} from './managedMobileLobApp';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedMobileLobApp[] | undefined;
}
