import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type UnifiedGroupSource } from './unifiedGroupSource';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UnifiedGroupSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UnifiedGroupSource[] | undefined;
}
