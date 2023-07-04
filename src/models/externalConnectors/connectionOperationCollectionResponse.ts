import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {ConnectionOperation} from './connectionOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectionOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConnectionOperation[] | undefined;
}
