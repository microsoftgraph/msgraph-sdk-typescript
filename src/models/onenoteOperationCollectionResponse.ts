import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type OnenoteOperation } from './onenoteOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OnenoteOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnenoteOperation[] | undefined;
}
