import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {PrintOperation} from './printOperation';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: PrintOperation[] | undefined;
}
