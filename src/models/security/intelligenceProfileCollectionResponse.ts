import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {IntelligenceProfile} from './intelligenceProfile';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfileCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IntelligenceProfile[] | undefined;
}
