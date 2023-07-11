import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {TaskProcessingResult} from './taskProcessingResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskProcessingResultCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TaskProcessingResult[] | undefined;
}
