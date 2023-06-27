import {ActivityType} from './activityType';
import {Entity} from './entity';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalRiskDetection extends Entity, Parsable {
    /**
     * Indicates the activity type the detected risk is linked to.  The possible values are: signin, servicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: servicePrincipal.
     */
    activity?: ActivityType | undefined;
    /**
     * Date and time when the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    activityDateTime?: Date | undefined;
    /**
     * Additional information associated with the risk detection. This string value is represented as a JSON object with the quotations escaped.
     */
    additionalInfo?: string | undefined;
    /**
     * The unique identifier for the associated application.
     */
    appId?: string | undefined;
    /**
     * Correlation ID of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity.
     */
    correlationId?: string | undefined;
    /**
     * Date and time when the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    detectedDateTime?: Date | undefined;
    /**
     * Timing of the detected risk , whether real-time or offline. The possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue.
     */
    detectionTimingType?: RiskDetectionTimingType | undefined;
    /**
     * Provides the IP address of the client from where the risk occurred.
     */
    ipAddress?: string | undefined;
    /**
     * The unique identifier for the key credential associated with the risk detection.
     */
    keyIds?: string[] | undefined;
    /**
     * Date and time when the risk detection was last updated.
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * Location from where the sign-in was initiated.
     */
    location?: SignInLocation | undefined;
    /**
     * Request identifier of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity. Supports $filter (eq).
     */
    requestId?: string | undefined;
    /**
     * Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal.
     */
    riskDetail?: RiskDetail | undefined;
    /**
     * The type of risk event detected. The possible values are: investigationsThreatIntelligence, generic, adminConfirmedServicePrincipalCompromised, suspiciousSignins, leakedCredentials, anomalousServicePrincipalActivity, maliciousApplication, suspiciousApplication.
     */
    riskEventType?: string | undefined;
    /**
     * Level of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: low, medium, high, hidden, none.
     */
    riskLevel?: RiskLevel | undefined;
    /**
     * The state of a detected risky service principal or sign-in activity. The possible values are: none, dismissed, atRisk, confirmedCompromised.
     */
    riskState?: RiskState | undefined;
    /**
     * The display name for the service principal.
     */
    servicePrincipalDisplayName?: string | undefined;
    /**
     * The unique identifier for the service principal. Supports $filter (eq).
     */
    servicePrincipalId?: string | undefined;
    /**
     * Source of the risk detection. For example, identityProtection.
     */
    source?: string | undefined;
    /**
     * Indicates the type of token issuer for the detected sign-in risk. The possible values are: AzureAD.
     */
    tokenIssuerType?: TokenIssuerType | undefined;
}
