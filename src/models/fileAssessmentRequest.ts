import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FileAssessmentRequest extends Parsable, ThreatAssessmentRequest {
    /**
     * Base64 encoded file content. The file content cannot fetch back because it isn't stored.
     */
    contentData?: string | undefined;
    /**
     * The file name.
     */
    fileName?: string | undefined;
}
