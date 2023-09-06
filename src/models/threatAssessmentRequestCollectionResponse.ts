import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ThreatAssessmentRequest } from './threatAssessmentRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ThreatAssessmentRequest[] | undefined;
}
