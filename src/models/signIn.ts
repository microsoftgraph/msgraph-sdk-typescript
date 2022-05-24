import {AppliedConditionalAccessPolicy} from './appliedConditionalAccessPolicy';
import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {DeviceDetail} from './deviceDetail';
import {Entity} from './entity';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {SignInLocation} from './signInLocation';
import {SignInStatus} from './signInStatus';

export interface SignIn extends Entity{
    /** The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only). */
    appDisplayName?:string | undefined;
    /** The application identifier in Azure Active Directory. Supports $filter (eq operator only). */
    appId?:string | undefined;
    /** A list of conditional access policies that are triggered by the corresponding sign-in activity. */
    appliedConditionalAccessPolicies?:AppliedConditionalAccessPolicy[] | undefined;
    /** The legacy client used for sign-in activity. For example: Browser, Exchange ActiveSync, Modern clients, IMAP, MAPI, SMTP, or POP. Supports $filter (eq operator only). */
    clientAppUsed?:string | undefined;
    /** The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or unknownFutureValue. Supports $filter (eq operator only). */
    conditionalAccessStatus?:ConditionalAccessStatus | undefined;
    /** The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. Supports $filter (eq operator only). */
    correlationId?:string | undefined;
    /** The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only). */
    createdDateTime?:Date | undefined;
    /** The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSystem properties. */
    deviceDetail?:DeviceDetail | undefined;
    /** The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only). */
    ipAddress?:string | undefined;
    /** Indicates whether a user sign in is interactive. In interactive sign in, the user provides an authentication factor to Azure AD. These factors include passwords, responses to MFA challenges, biometric factors, or QR codes that a user provides to Azure AD or an associated app. In non-interactive sign in, the user doesn't provide an authentication factor. Instead, the client app uses a token or code to authenticate or access a resource on behalf of a user. Non-interactive sign ins are commonly used for a client to sign in on a user's behalf in a process transparent to the user. */
    isInteractive?:boolean | undefined;
    /** The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties. */
    location?:SignInLocation | undefined;
    /** The name of the resource that the user signed in to. Supports $filter (eq operator only). */
    resourceDisplayName?:string | undefined;
    /** The identifier of the resource that the user signed in to. Supports $filter (eq operator only). */
    resourceId?:string | undefined;
    /** The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    riskDetail?:RiskDetail | undefined;
    /** Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only). */
    riskEventTypes?:string[] | undefined;
    /** The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only). */
    riskEventTypes_v2?:string[] | undefined;
    /** The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    riskLevelAggregated?:RiskLevel | undefined;
    /** The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    riskLevelDuringSignIn?:RiskLevel | undefined;
    /** The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only). */
    riskState?:RiskState | undefined;
    /** The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property. */
    status?:SignInStatus | undefined;
    /** The display name of the user. Supports $filter (eq and startsWith operators only). */
    userDisplayName?:string | undefined;
    /** The identifier of the user. Supports $filter (eq operator only). */
    userId?:string | undefined;
    /** The UPN of the user. Supports $filter (eq and startsWith operators only). */
    userPrincipalName?:string | undefined;
}
