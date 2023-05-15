import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DocumentSetVersion} from './documentSetVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DocumentSetVersion[] | undefined;
}
