import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {PrintOperation} from './printOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: PrintOperation[] | undefined;
}
