import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DocumentSetVersion } from './documentSetVersion';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DocumentSetVersion[] | undefined;
}
