import {Entity} from '../entity';
import {AlertClassification} from './alertClassification';
import {AlertComment} from './alertComment';
import {AlertDetermination} from './alertDetermination';
import {AlertEvidence} from './alertEvidence';
import {AlertSeverity} from './alertSeverity';
import {AlertStatus} from './alertStatus';
import {DetectionSource} from './detectionSource';
import {ServiceSource} from './serviceSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Alert extends Entity, Parsable {
    /**
     * The adversary or activity group that is associated with this alert.
     */
    actorDisplayName?: string | undefined;
    /**
     * URL for the alert page in the Microsoft 365 Defender portal.
     */
    alertWebUrl?: string | undefined;
    /**
     * Owner of the alert, or null if no owner is assigned.
     */
    assignedTo?: string | undefined;
    /**
     * The attack kill-chain category that the alert belongs to. Aligned with the MITRE ATT&CK framework.
     */
    category?: string | undefined;
    /**
     * Specifies whether the alert represents a true threat. Possible values are: unknown, falsePositive, truePositive, benignPositive, unknownFutureValue.
     */
    classification?: AlertClassification | undefined;
    /**
     * Array of comments created by the Security Operations (SecOps) team during the alert management process.
     */
    comments?: AlertComment[] | undefined;
    /**
     * Time when Microsoft 365 Defender created the alert.
     */
    createdDateTime?: Date | undefined;
    /**
     * String value describing each alert.
     */
    description?: string | undefined;
    /**
     * Detection technology or sensor that identified the notable component or activity. Possible values are: unknown, microsoftDefenderForEndpoint, antivirus, smartScreen, customTi, microsoftDefenderForOffice365, automatedInvestigation, microsoftThreatExperts, customDetection, microsoftDefenderForIdentity, cloudAppSecurity, microsoft365Defender, azureAdIdentityProtection, manual, microsoftDataLossPrevention, appGovernancePolicy, appGovernanceDetection, unknownFutureValue, microsoftDefenderForCloud. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: microsoftDefenderForCloud.
     */
    detectionSource?: DetectionSource | undefined;
    /**
     * The ID of the detector that triggered the alert.
     */
    detectorId?: string | undefined;
    /**
     * Specifies the result of the investigation, whether the alert represents a true attack and if so, the nature of the attack. Possible values are: unknown, apt, malware, securityPersonnel, securityTesting, unwantedSoftware, other, multiStagedAttack, compromisedUser, phishing, maliciousUserActivity, clean, insufficientData, confirmedUserActivity, lineOfBusinessApplication, unknownFutureValue.
     */
    determination?: AlertDetermination | undefined;
    /**
     * Collection of evidence related to the alert.
     */
    evidence?: AlertEvidence[] | undefined;
    /**
     * The earliest activity associated with the alert.
     */
    firstActivityDateTime?: Date | undefined;
    /**
     * Unique identifier to represent the incident this alert resource is associated with.
     */
    incidentId?: string | undefined;
    /**
     * URL for the incident page in the Microsoft 365 Defender portal.
     */
    incidentWebUrl?: string | undefined;
    /**
     * The oldest activity associated with the alert.
     */
    lastActivityDateTime?: Date | undefined;
    /**
     * Time when the alert was last updated at Microsoft 365 Defender.
     */
    lastUpdateDateTime?: Date | undefined;
    /**
     * The attack techniques, as aligned with the MITRE ATT&CK framework.
     */
    mitreTechniques?: string[] | undefined;
    /**
     * The ID of the alert as it appears in the security provider product that generated the alert.
     */
    providerAlertId?: string | undefined;
    /**
     * Recommended response and remediation actions to take in the event this alert was generated.
     */
    recommendedActions?: string | undefined;
    /**
     * Time when the alert was resolved.
     */
    resolvedDateTime?: Date | undefined;
    /**
     * The serviceSource property
     */
    serviceSource?: ServiceSource | undefined;
    /**
     * The severity property
     */
    severity?: AlertSeverity | undefined;
    /**
     * The status property
     */
    status?: AlertStatus | undefined;
    /**
     * The Azure Active Directory tenant the alert was created in.
     */
    tenantId?: string | undefined;
    /**
     * The threat associated with this alert.
     */
    threatDisplayName?: string | undefined;
    /**
     * Threat family associated with this alert.
     */
    threatFamilyName?: string | undefined;
    /**
     * Brief identifying string value describing the alert.
     */
    title?: string | undefined;
}
