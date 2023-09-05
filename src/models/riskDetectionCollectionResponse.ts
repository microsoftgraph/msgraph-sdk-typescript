import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type RiskDetection } from './riskDetection';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RiskDetectionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RiskDetection[] | undefined;
}
