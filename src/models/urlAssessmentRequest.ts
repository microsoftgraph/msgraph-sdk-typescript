import { type ThreatAssessmentRequest } from './threatAssessmentRequest';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UrlAssessmentRequest extends Parsable, ThreatAssessmentRequest {
    /**
     * The URL string.
     */
    url?: string | undefined;
}
