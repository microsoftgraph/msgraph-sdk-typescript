import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type ConnectionOperation } from './connectionOperation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ConnectionOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ConnectionOperation[] | undefined;
}
