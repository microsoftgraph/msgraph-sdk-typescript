import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UrlAssessmentRequest extends Partial<Parsable>, ThreatAssessmentRequest {
    /** The URL string. */
    url?: string | undefined;
}
