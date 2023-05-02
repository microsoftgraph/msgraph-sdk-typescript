import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MobileLobApp} from './mobileLobApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileLobAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: MobileLobApp[] | undefined;
}
