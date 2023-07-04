import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfileIndicatorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IntelligenceProfileIndicator[] | undefined;
}
