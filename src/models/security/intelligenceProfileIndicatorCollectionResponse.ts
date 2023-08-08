import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfileIndicatorCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IntelligenceProfileIndicator[] | undefined;
}
