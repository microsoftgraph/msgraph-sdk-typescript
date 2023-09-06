import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type CommsOperation } from './commsOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CommsOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CommsOperation[] | undefined;
}
