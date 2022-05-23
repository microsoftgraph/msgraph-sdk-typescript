import {ActivityType} from './activityType';
import {Entity} from './entity';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';

export interface RiskDetection extends Entity{
    /** Indicates the activity type the detected risk is linked to. The possible values are signin, user, unknownFutureValue. */
    activity?:ActivityType | undefined;
    /** Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    activityDateTime?:Date | undefined;
    /** Additional information associated with the risk detection in JSON format. */
    additionalInfo?:string | undefined;
    /** Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in. */
    correlationId?:string | undefined;
    /** Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    detectedDateTime?:Date | undefined;
    /** Timing of the detected risk (real-time/offline). The possible values are notDefined, realtime, nearRealtime, offline, unknownFutureValue. */
    detectionTimingType?:RiskDetectionTimingType | undefined;
    /** Provides the IP address of the client from where the risk occurred. */
    ipAddress?:string | undefined;
    /** Date and time that the risk detection was last updated. */
    lastUpdatedDateTime?:Date | undefined;
    /** Location of the sign-in. */
    location?:SignInLocation | undefined;
    /** Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in. */
    requestId?:string | undefined;
    /** Details of the detected risk. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden. */
    riskDetail?:RiskDetail | undefined;
    /** The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, mcasImpossibleTravel, mcasSuspiciousInboxManipulationRules, investigationsThreatIntelligenceSigninLinked, maliciousIPAddressValidCredentialsBlockedIP, and unknownFutureValue.  For more information about each value, see riskEventType values. */
    riskEventType?:string | undefined;
    /** Level of the detected risk. The possible values are low, medium, high, hidden, none, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden. */
    riskLevel?:RiskLevel | undefined;
    /** The state of a detected risky user or sign-in. The possible values are none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, and unknownFutureValue. */
    riskState?:RiskState | undefined;
    /** Source of the risk detection. For example, activeDirectory. */
    source?:string | undefined;
    /** Indicates the type of token issuer for the detected sign-in risk. The possible values are AzureAD, ADFederationServices, and unknownFutureValue. */
    tokenIssuerType?:TokenIssuerType | undefined;
    /** Name of the user. */
    userDisplayName?:string | undefined;
    /** Unique ID of the user.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    userId?:string | undefined;
    /** The user principal name (UPN) of the user. */
    userPrincipalName?:string | undefined;
}
