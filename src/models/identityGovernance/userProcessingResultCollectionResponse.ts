import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type UserProcessingResult } from './userProcessingResult';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserProcessingResultCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserProcessingResult[] | undefined;
}
