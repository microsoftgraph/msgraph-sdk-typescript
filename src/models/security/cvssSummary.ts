import {VulnerabilitySeverity} from './vulnerabilitySeverity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CvssSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The CVSS score about this vulnerability.
     */
    score?: number | undefined;
    /**
     * The CVSS severity rating for this vulnerability. The possible values are: none, low, medium, high, critical, unknownFutureValue.
     */
    severity?: VulnerabilitySeverity | undefined;
    /**
     * The CVSS vector string for this vulnerability.
     */
    vectorString?: string | undefined;
}
