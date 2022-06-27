import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FileAssessmentRequest extends Partial<AdditionalDataHolder>, Partial<Parsable>, ThreatAssessmentRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Base64 encoded file content. The file content cannot fetch back because it isn't stored. */
    contentData?: string | undefined;
    /** The file name. */
    fileName?: string | undefined;
}
