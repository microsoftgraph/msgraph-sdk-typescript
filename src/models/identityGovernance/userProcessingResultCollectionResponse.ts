import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {UserProcessingResult} from './userProcessingResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserProcessingResultCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserProcessingResult[] | undefined;
}
