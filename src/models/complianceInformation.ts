import {CertificationControl} from './certificationControl';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ComplianceInformation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Collection of the certification controls associated with the certification.
     */
    certificationControls?: CertificationControl[] | undefined;
    /**
     * The name of the compliance certification, for example, ISO 27018:2014, GDPR, FedRAMP, and NIST 800-171.
     */
    certificationName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
