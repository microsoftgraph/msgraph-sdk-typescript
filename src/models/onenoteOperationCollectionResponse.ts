import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OnenoteOperation} from './onenoteOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnenoteOperation[] | undefined;
}
