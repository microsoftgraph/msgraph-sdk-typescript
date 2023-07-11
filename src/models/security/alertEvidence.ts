import {EvidenceRemediationStatus} from './evidenceRemediationStatus';
import {EvidenceRole} from './evidenceRole';
import {EvidenceVerdict} from './evidenceVerdict';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertEvidence extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The date and time when the evidence was created and added to the alert. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * The detailedRoles property
     */
    detailedRoles?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The remediationStatus property
     */
    remediationStatus?: EvidenceRemediationStatus | undefined;
    /**
     * Details about the remediation status.
     */
    remediationStatusDetails?: string | undefined;
    /**
     * One or more roles that an evidence entity represents in an alert. For example, an IP address that is associated with an attacker has the evidence role Attacker.
     */
    roles?: EvidenceRole[] | undefined;
    /**
     * Array of custom tags associated with an evidence instance. For example, to denote a group of devices or high value assets.
     */
    tags?: string[] | undefined;
    /**
     * The verdict property
     */
    verdict?: EvidenceVerdict | undefined;
}
