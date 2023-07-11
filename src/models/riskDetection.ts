import {ActivityType} from './activityType';
import {Entity} from './entity';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskDetection extends Entity, Parsable {
    /**
     * Indicates the activity type the detected risk is linked to. Possible values are: signin, user, unknownFutureValue.
     */
    activity?: ActivityType | undefined;
    /**
     * Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z
     */
    activityDateTime?: Date | undefined;
    /**
     * Additional information associated with the risk detection in JSON format. For example, '[{/'Key/':/'userAgent/',/'Value/':/'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36/'}]'. Possible keys in the additionalInfo JSON string are: userAgent, alertUrl, relatedEventTimeInUtc, relatedUserAgent, deviceInformation, relatedLocation, requestId, correlationId, lastActivityTimeInUtc, malwareName, clientLocation, clientIp, riskReasons. For more information about riskReasons and possible values, see riskReasons values.
     */
    additionalInfo?: string | undefined;
    /**
     * Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     */
    correlationId?: string | undefined;
    /**
     * Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 looks like this: 2014-01-01T00:00:00Z
     */
    detectedDateTime?: Date | undefined;
    /**
     * Timing of the detected risk (real-time/offline). Possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue.
     */
    detectionTimingType?: RiskDetectionTimingType | undefined;
    /**
     * Provides the IP address of the client from where the risk occurred.
     */
    ipAddress?: string | undefined;
    /**
     * Date and time that the risk detection was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is look like this: 2014-01-01T00:00:00Z
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * Location of the sign-in.
     */
    location?: SignInLocation | undefined;
    /**
     * Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     */
    requestId?: string | undefined;
    /**
     * Details of the detected risk. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue, m365DAdminDismissedDetection. Note that you must use the Prefer: include - unknown -enum-members request header to get the following value(s) in this evolvable enum: m365DAdminDismissedDetection.
     */
    riskDetail?: RiskDetail | undefined;
    /**
     * The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, passwordSpray, impossibleTravel, newCountry, anomalousToken, tokenIssuerAnomaly,suspiciousBrowser, riskyIPAddress, mcasSuspiciousInboxManipulationRules, suspiciousInboxForwarding, and anomalousUserActivity. If the risk detection is a premium detection, will show generic. For more information about each value, see riskEventType values.
     */
    riskEventType?: string | undefined;
    /**
     * Level of the detected risk. Possible values are: low, medium, high, hidden, none, unknownFutureValue.
     */
    riskLevel?: RiskLevel | undefined;
    /**
     * The state of a detected risky user or sign-in. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     */
    riskState?: RiskState | undefined;
    /**
     * Source of the risk detection. For example, activeDirectory.
     */
    source?: string | undefined;
    /**
     * Indicates the type of token issuer for the detected sign-in risk. Possible values are: AzureAD, ADFederationServices, UnknownFutureValue.
     */
    tokenIssuerType?: TokenIssuerType | undefined;
    /**
     * The user principal name (UPN) of the user.
     */
    userDisplayName?: string | undefined;
    /**
     * Unique ID of the user.
     */
    userId?: string | undefined;
    /**
     * The user principal name (UPN) of the user.
     */
    userPrincipalName?: string | undefined;
}
