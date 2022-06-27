import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UrlAssessmentRequest extends Partial<AdditionalDataHolder>, Partial<Parsable>, ThreatAssessmentRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The URL string. */
    url?: string | undefined;
}
