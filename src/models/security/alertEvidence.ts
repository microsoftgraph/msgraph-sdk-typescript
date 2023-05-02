import {EvidenceRemediationStatus} from './evidenceRemediationStatus';
import {EvidenceRole} from './evidenceRole';
import {EvidenceVerdict} from './evidenceVerdict';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertEvidence extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The time the evidence was created and added to the alert. */
    createdDateTime?: Date | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The remediationStatus property */
    remediationStatus?: EvidenceRemediationStatus | undefined;
    /** Details about the remediation status. */
    remediationStatusDetails?: string | undefined;
    /** The role/s that an evidence entity represents in an alert, e.g., an IP address that is associated with an attacker will have the evidence role 'Attacker'. */
    roles?: EvidenceRole[] | undefined;
    /** Array of custom tags associated with an evidence instance, for example to denote a group of devices, high value assets, etc. */
    tags?: string[] | undefined;
    /** The verdict property */
    verdict?: EvidenceVerdict | undefined;
}
