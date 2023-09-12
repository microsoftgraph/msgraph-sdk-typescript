import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type OnenoteResource } from './onenoteResource';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OnenoteResourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnenoteResource[] | undefined;
}
