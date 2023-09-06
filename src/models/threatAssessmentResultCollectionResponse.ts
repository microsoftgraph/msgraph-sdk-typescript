import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ThreatAssessmentResult } from './threatAssessmentResult';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentResultCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ThreatAssessmentResult[] | undefined;
}
