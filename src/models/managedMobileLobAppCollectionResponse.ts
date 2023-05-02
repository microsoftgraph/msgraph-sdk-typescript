import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ManagedMobileLobApp} from './managedMobileLobApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ManagedMobileLobApp[] | undefined;
}
