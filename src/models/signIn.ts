import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {AdminMember1, AppliedConditionalAccessPolicy, DeviceDetail, Entity, SignInLocation, SignInStatus} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class SignIn extends Entity implements Parsable {
    /** The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only). */
    private _appDisplayName?: string | undefined;
    /** The application identifier in Azure Active Directory. Supports $filter (eq operator only). */
    private _appId?: string | undefined;
    /** A list of conditional access policies that are triggered by the corresponding sign-in activity. */
    private _appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy | AdminMember1[] | undefined;
    /** The legacy client used for sign-in activity. For example: Browser, Exchange ActiveSync, Modern clients, IMAP, MAPI, SMTP, or POP. Supports $filter (eq operator only). */
    private _clientAppUsed?: string | undefined;
    /** The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or unknownFutureValue. Supports $filter (eq operator only). */
    private _conditionalAccessStatus?: ConditionalAccessStatus | AdminMember1 | undefined;
    /** The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. Supports $filter (eq operator only). */
    private _correlationId?: string | undefined;
    /** The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only). */
    private _createdDateTime?: Date | undefined;
    /** The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSystem properties. */
    private _deviceDetail?: DeviceDetail | AdminMember1 | undefined;
    /** The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only). */
    private _ipAddress?: string | undefined;
    /** Indicates whether a user sign in is interactive. In interactive sign in, the user provides an authentication factor to Azure AD. These factors include passwords, responses to MFA challenges, biometric factors, or QR codes that a user provides to Azure AD or an associated app. In non-interactive sign in, the user doesn't provide an authentication factor. Instead, the client app uses a token or code to authenticate or access a resource on behalf of a user. Non-interactive sign ins are commonly used for a client to sign in on a user's behalf in a process transparent to the user. */
    private _isInteractive?: boolean | undefined;
    /** The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties. */
    private _location?: SignInLocation | AdminMember1 | undefined;
    /** The name of the resource that the user signed in to. Supports $filter (eq operator only). */
    private _resourceDisplayName?: string | undefined;
    /** The identifier of the resource that the user signed in to. Supports $filter (eq operator only). */
    private _resourceId?: string | undefined;
    /** The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    private _riskDetail?: RiskDetail | AdminMember1 | undefined;
    /** Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only). */
    private _riskEventTypes?: string[] | undefined;
    /** The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only). */
    private _riskEventTypes_v2?: string[] | undefined;
    /** The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    private _riskLevelAggregated?: RiskLevel | AdminMember1 | undefined;
    /** The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    private _riskLevelDuringSignIn?: RiskLevel | AdminMember1 | undefined;
    /** The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only). */
    private _riskState?: RiskState | AdminMember1 | undefined;
    /** The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property. */
    private _status?: SignInStatus | AdminMember1 | undefined;
    /** The display name of the user. Supports $filter (eq and startsWith operators only). */
    private _userDisplayName?: string | undefined;
    /** The identifier of the user. Supports $filter (eq operator only). */
    private _userId?: string | undefined;
    /** The UPN of the user. Supports $filter (eq and startsWith operators only). */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the appDisplayName property value. The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Gets the appId property value. The application identifier in Azure Active Directory. Supports $filter (eq operator only).
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The application identifier in Azure Active Directory. Supports $filter (eq operator only).
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Gets the appliedConditionalAccessPolicies property value. A list of conditional access policies that are triggered by the corresponding sign-in activity.
     * @returns a admin
     */
    public get appliedConditionalAccessPolicies() {
        return this._appliedConditionalAccessPolicies;
    };
    /**
     * Sets the appliedConditionalAccessPolicies property value. A list of conditional access policies that are triggered by the corresponding sign-in activity.
     * @param value Value to set for the appliedConditionalAccessPolicies property.
     */
    public set appliedConditionalAccessPolicies(value: AppliedConditionalAccessPolicy | AdminMember1[] | undefined) {
        this._appliedConditionalAccessPolicies = value;
    };
    /**
     * Gets the clientAppUsed property value. The legacy client used for sign-in activity. For example: Browser, Exchange ActiveSync, Modern clients, IMAP, MAPI, SMTP, or POP. Supports $filter (eq operator only).
     * @returns a string
     */
    public get clientAppUsed() {
        return this._clientAppUsed;
    };
    /**
     * Sets the clientAppUsed property value. The legacy client used for sign-in activity. For example: Browser, Exchange ActiveSync, Modern clients, IMAP, MAPI, SMTP, or POP. Supports $filter (eq operator only).
     * @param value Value to set for the clientAppUsed property.
     */
    public set clientAppUsed(value: string | undefined) {
        this._clientAppUsed = value;
    };
    /**
     * Gets the conditionalAccessStatus property value. The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or unknownFutureValue. Supports $filter (eq operator only).
     * @returns a admin
     */
    public get conditionalAccessStatus() {
        return this._conditionalAccessStatus;
    };
    /**
     * Sets the conditionalAccessStatus property value. The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the conditionalAccessStatus property.
     */
    public set conditionalAccessStatus(value: ConditionalAccessStatus | AdminMember1 | undefined) {
        this._conditionalAccessStatus = value;
    };
    /**
     * Instantiates a new signIn and sets the default values.
     */
    public constructor() {
        super();
        this.type = "#microsoft.graph.signIn";
    };
    /**
     * Gets the correlationId property value. The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. Supports $filter (eq operator only).
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. Supports $filter (eq operator only).
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the createdDateTime property value. The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deviceDetail property value. The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSystem properties.
     * @returns a admin
     */
    public get deviceDetail() {
        return this._deviceDetail;
    };
    /**
     * Sets the deviceDetail property value. The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSystem properties.
     * @param value Value to set for the deviceDetail property.
     */
    public set deviceDetail(value: DeviceDetail | AdminMember1 | undefined) {
        this._deviceDetail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "appId": n => { this.appId = n.getStringValue(); },
            "appliedConditionalAccessPolicies": n => { this.appliedConditionalAccessPolicies = n.getObjectValue<AppliedConditionalAccessPolicy>(createAppliedConditionalAccessPolicyFromDiscriminatorValue); },
            "clientAppUsed": n => { this.clientAppUsed = n.getStringValue(); },
            "conditionalAccessStatus": n => { this.conditionalAccessStatus = n.getObjectValue<ConditionalAccessStatus>(createConditionalAccessStatusFromDiscriminatorValue); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deviceDetail": n => { this.deviceDetail = n.getObjectValue<DeviceDetail>(createDeviceDetailFromDiscriminatorValue); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "isInteractive": n => { this.isInteractive = n.getBooleanValue(); },
            "location": n => { this.location = n.getObjectValue<SignInLocation>(createSignInLocationFromDiscriminatorValue); },
            "resourceDisplayName": n => { this.resourceDisplayName = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "riskDetail": n => { this.riskDetail = n.getObjectValue<RiskDetail>(createRiskDetailFromDiscriminatorValue); },
            "riskEventTypes": n => { this.riskEventTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "riskEventTypes_v2": n => { this.riskEventTypes_v2 = n.getCollectionOfPrimitiveValues<string>(); },
            "riskLevelAggregated": n => { this.riskLevelAggregated = n.getObjectValue<RiskLevel>(createRiskLevelFromDiscriminatorValue); },
            "riskLevelDuringSignIn": n => { this.riskLevelDuringSignIn = n.getObjectValue<RiskLevel>(createRiskLevelFromDiscriminatorValue); },
            "riskState": n => { this.riskState = n.getObjectValue<RiskState>(createRiskStateFromDiscriminatorValue); },
            "status": n => { this.status = n.getObjectValue<SignInStatus>(createSignInStatusFromDiscriminatorValue); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddress property value. The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Gets the isInteractive property value. Indicates whether a user sign in is interactive. In interactive sign in, the user provides an authentication factor to Azure AD. These factors include passwords, responses to MFA challenges, biometric factors, or QR codes that a user provides to Azure AD or an associated app. In non-interactive sign in, the user doesn't provide an authentication factor. Instead, the client app uses a token or code to authenticate or access a resource on behalf of a user. Non-interactive sign ins are commonly used for a client to sign in on a user's behalf in a process transparent to the user.
     * @returns a boolean
     */
    public get isInteractive() {
        return this._isInteractive;
    };
    /**
     * Sets the isInteractive property value. Indicates whether a user sign in is interactive. In interactive sign in, the user provides an authentication factor to Azure AD. These factors include passwords, responses to MFA challenges, biometric factors, or QR codes that a user provides to Azure AD or an associated app. In non-interactive sign in, the user doesn't provide an authentication factor. Instead, the client app uses a token or code to authenticate or access a resource on behalf of a user. Non-interactive sign ins are commonly used for a client to sign in on a user's behalf in a process transparent to the user.
     * @param value Value to set for the isInteractive property.
     */
    public set isInteractive(value: boolean | undefined) {
        this._isInteractive = value;
    };
    /**
     * Gets the location property value. The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
     * @returns a admin
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
     * @param value Value to set for the location property.
     */
    public set location(value: SignInLocation | AdminMember1 | undefined) {
        this._location = value;
    };
    /**
     * Gets the resourceDisplayName property value. The name of the resource that the user signed in to. Supports $filter (eq operator only).
     * @returns a string
     */
    public get resourceDisplayName() {
        return this._resourceDisplayName;
    };
    /**
     * Sets the resourceDisplayName property value. The name of the resource that the user signed in to. Supports $filter (eq operator only).
     * @param value Value to set for the resourceDisplayName property.
     */
    public set resourceDisplayName(value: string | undefined) {
        this._resourceDisplayName = value;
    };
    /**
     * Gets the resourceId property value. The identifier of the resource that the user signed in to. Supports $filter (eq operator only).
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. The identifier of the resource that the user signed in to. Supports $filter (eq operator only).
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Gets the riskDetail property value. The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
     * @returns a admin
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Sets the riskDetail property value. The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | AdminMember1 | undefined) {
        this._riskDetail = value;
    };
    /**
     * Gets the riskEventTypes property value. Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only).
     * @returns a string
     */
    public get riskEventTypes() {
        return this._riskEventTypes;
    };
    /**
     * Sets the riskEventTypes property value. Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the riskEventTypes property.
     */
    public set riskEventTypes(value: string[] | undefined) {
        this._riskEventTypes = value;
    };
    /**
     * Gets the riskEventTypes_v2 property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get riskEventTypes_v2() {
        return this._riskEventTypes_v2;
    };
    /**
     * Sets the riskEventTypes_v2 property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the riskEventTypes_v2 property.
     */
    public set riskEventTypes_v2(value: string[] | undefined) {
        this._riskEventTypes_v2 = value;
    };
    /**
     * Gets the riskLevelAggregated property value. The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
     * @returns a admin
     */
    public get riskLevelAggregated() {
        return this._riskLevelAggregated;
    };
    /**
     * Sets the riskLevelAggregated property value. The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
     * @param value Value to set for the riskLevelAggregated property.
     */
    public set riskLevelAggregated(value: RiskLevel | AdminMember1 | undefined) {
        this._riskLevelAggregated = value;
    };
    /**
     * Gets the riskLevelDuringSignIn property value. The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
     * @returns a admin
     */
    public get riskLevelDuringSignIn() {
        return this._riskLevelDuringSignIn;
    };
    /**
     * Sets the riskLevelDuringSignIn property value. The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
     * @param value Value to set for the riskLevelDuringSignIn property.
     */
    public set riskLevelDuringSignIn(value: RiskLevel | AdminMember1 | undefined) {
        this._riskLevelDuringSignIn = value;
    };
    /**
     * Gets the riskState property value. The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only).
     * @returns a admin
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Sets the riskState property value. The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the riskState property.
     */
    public set riskState(value: RiskState | AdminMember1 | undefined) {
        this._riskState = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeObjectValue<AppliedConditionalAccessPolicy>("appliedConditionalAccessPolicies", this.appliedConditionalAccessPolicies);
        writer.writeStringValue("clientAppUsed", this.clientAppUsed);
        writer.writeObjectValue<ConditionalAccessStatus>("conditionalAccessStatus", this.conditionalAccessStatus);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DeviceDetail>("deviceDetail", this.deviceDetail);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeBooleanValue("isInteractive", this.isInteractive);
        writer.writeObjectValue<SignInLocation>("location", this.location);
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeObjectValue<RiskDetail>("riskDetail", this.riskDetail);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", this.riskEventTypes);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes_v2", this.riskEventTypes_v2);
        writer.writeObjectValue<RiskLevel>("riskLevelAggregated", this.riskLevelAggregated);
        writer.writeObjectValue<RiskLevel>("riskLevelDuringSignIn", this.riskLevelDuringSignIn);
        writer.writeObjectValue<RiskState>("riskState", this.riskState);
        writer.writeObjectValue<SignInStatus>("status", this.status);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the status property value. The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
     * @returns a admin
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
     * @param value Value to set for the status property.
     */
    public set status(value: SignInStatus | AdminMember1 | undefined) {
        this._status = value;
    };
    /**
     * Gets the userDisplayName property value. The display name of the user. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. The display name of the user. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Gets the userId property value. The identifier of the user. Supports $filter (eq operator only).
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The identifier of the user. Supports $filter (eq operator only).
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userPrincipalName property value. The UPN of the user. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The UPN of the user. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
