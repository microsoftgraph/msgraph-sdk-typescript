import {CertificationControl} from './certificationControl';

export interface ComplianceInformation{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Collection of the certification controls associated with certification */
    certificationControls?:CertificationControl[] | undefined;
    /** Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171) */
    certificationName?:string | undefined;
}
