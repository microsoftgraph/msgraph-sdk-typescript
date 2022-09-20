import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {createAppliedConditionalAccessPolicyFromDiscriminatorValue} from './createAppliedConditionalAccessPolicyFromDiscriminatorValue';
import {createDeviceDetailFromDiscriminatorValue} from './createDeviceDetailFromDiscriminatorValue';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {createSignInStatusFromDiscriminatorValue} from './createSignInStatusFromDiscriminatorValue';
import {AppliedConditionalAccessPolicy, DeviceDetail, Entity, SignInLocation, SignInStatus} from './index';
import {RiskDetail} from './riskDetail';
import {RiskEventType} from './riskEventType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class SignIn extends Entity implements Parsable {
    /** App name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only). */
    private _appDisplayName?: string | undefined;
    /** Unique GUID representing the app ID in the Azure Active Directory. Supports $filter (eq operator only). */
    private _appId?: string | undefined;
    /** The appliedConditionalAccessPolicies property */
    private _appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy[] | undefined;
    /** Identifies the client used for the sign-in activity. Modern authentication clients include Browser and modern clients. Legacy authentication clients include Exchange ActiveSync, IMAP, MAPI, SMTP, POP, and other clients. Supports $filter (eq operator only). */
    private _clientAppUsed?: string | undefined;
    /** Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and unknownFutureValue. Supports $filter (eq operator only). */
    private _conditionalAccessStatus?: ConditionalAccessStatus | undefined;
    /** The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity. Supports $filter (eq operator only). */
    private _correlationId?: string | undefined;
    /** Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only). */
    private _createdDateTime?: Date | undefined;
    /** Device information from where the sign-in occurred; includes device ID, operating system, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties. */
    private _deviceDetail?: DeviceDetail | undefined;
    /** IP address of the client used to sign in. Supports $filter (eq and startsWith operators only). */
    private _ipAddress?: string | undefined;
    /** Indicates if a sign-in is interactive or not. */
    private _isInteractive?: boolean | undefined;
    /** Provides the city, state, and country code where the sign-in originated. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties. */
    private _location?: SignInLocation | undefined;
    /** Name of the resource the user signed into. Supports $filter (eq operator only). */
    private _resourceDisplayName?: string | undefined;
    /** ID of the resource that the user signed into. Supports $filter (eq operator only). */
    private _resourceId?: string | undefined;
    /** Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far.  Supports $filter (eq operator only).Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the value hidden. */
    private _riskDetail?: RiskDetail | undefined;
    /** Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only). */
    private _riskEventTypes?: RiskEventType[] | undefined;
    /** The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only). */
    private _riskEventTypes_v2?: string[] | undefined;
    /** Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).  Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden. */
    private _riskLevelAggregated?: RiskLevel | undefined;
    /** Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection.  Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden. */
    private _riskLevelDuringSignIn?: RiskLevel | undefined;
    /** Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. Supports $filter (eq operator only). */
    private _riskState?: RiskState | undefined;
    /** Sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property. */
    private _status?: SignInStatus | undefined;
    /** Display name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only). */
    private _userDisplayName?: string | undefined;
    /** ID of the user that initiated the sign-in. Supports $filter (eq operator only). */
    private _userId?: string | undefined;
    /** User principal name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only). */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the appDisplayName property value. App name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. App name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Gets the appId property value. Unique GUID representing the app ID in the Azure Active Directory. Supports $filter (eq operator only).
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. Unique GUID representing the app ID in the Azure Active Directory. Supports $filter (eq operator only).
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Gets the appliedConditionalAccessPolicies property value. The appliedConditionalAccessPolicies property
     * @returns a appliedConditionalAccessPolicy
     */
    public get appliedConditionalAccessPolicies() {
        return this._appliedConditionalAccessPolicies;
    };
    /**
     * Sets the appliedConditionalAccessPolicies property value. The appliedConditionalAccessPolicies property
     * @param value Value to set for the appliedConditionalAccessPolicies property.
     */
    public set appliedConditionalAccessPolicies(value: AppliedConditionalAccessPolicy[] | undefined) {
        this._appliedConditionalAccessPolicies = value;
    };
    /**
     * Gets the clientAppUsed property value. Identifies the client used for the sign-in activity. Modern authentication clients include Browser and modern clients. Legacy authentication clients include Exchange ActiveSync, IMAP, MAPI, SMTP, POP, and other clients. Supports $filter (eq operator only).
     * @returns a string
     */
    public get clientAppUsed() {
        return this._clientAppUsed;
    };
    /**
     * Sets the clientAppUsed property value. Identifies the client used for the sign-in activity. Modern authentication clients include Browser and modern clients. Legacy authentication clients include Exchange ActiveSync, IMAP, MAPI, SMTP, POP, and other clients. Supports $filter (eq operator only).
     * @param value Value to set for the clientAppUsed property.
     */
    public set clientAppUsed(value: string | undefined) {
        this._clientAppUsed = value;
    };
    /**
     * Gets the conditionalAccessStatus property value. Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and unknownFutureValue. Supports $filter (eq operator only).
     * @returns a conditionalAccessStatus
     */
    public get conditionalAccessStatus() {
        return this._conditionalAccessStatus;
    };
    /**
     * Sets the conditionalAccessStatus property value. Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the conditionalAccessStatus property.
     */
    public set conditionalAccessStatus(value: ConditionalAccessStatus | undefined) {
        this._conditionalAccessStatus = value;
    };
    /**
     * Instantiates a new signIn and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.signIn";
    };
    /**
     * Gets the correlationId property value. The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity. Supports $filter (eq operator only).
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity. Supports $filter (eq operator only).
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the createdDateTime property value. Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deviceDetail property value. Device information from where the sign-in occurred; includes device ID, operating system, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.
     * @returns a deviceDetail
     */
    public get deviceDetail() {
        return this._deviceDetail;
    };
    /**
     * Sets the deviceDetail property value. Device information from where the sign-in occurred; includes device ID, operating system, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.
     * @param value Value to set for the deviceDetail property.
     */
    public set deviceDetail(value: DeviceDetail | undefined) {
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
            "appliedConditionalAccessPolicies": n => { this.appliedConditionalAccessPolicies = n.getCollectionOfObjectValues<AppliedConditionalAccessPolicy>(createAppliedConditionalAccessPolicyFromDiscriminatorValue); },
            "clientAppUsed": n => { this.clientAppUsed = n.getStringValue(); },
            "conditionalAccessStatus": n => { this.conditionalAccessStatus = n.getEnumValue<ConditionalAccessStatus>(ConditionalAccessStatus); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deviceDetail": n => { this.deviceDetail = n.getObjectValue<DeviceDetail>(createDeviceDetailFromDiscriminatorValue); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "isInteractive": n => { this.isInteractive = n.getBooleanValue(); },
            "location": n => { this.location = n.getObjectValue<SignInLocation>(createSignInLocationFromDiscriminatorValue); },
            "resourceDisplayName": n => { this.resourceDisplayName = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "riskDetail": n => { this.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskEventTypes": n => { this.riskEventTypes = n.getEnumValues<RiskEventType>(RiskEventType); },
            "riskEventTypes_v2": n => { this.riskEventTypes_v2 = n.getCollectionOfPrimitiveValues<string>(); },
            "riskLevelAggregated": n => { this.riskLevelAggregated = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskLevelDuringSignIn": n => { this.riskLevelDuringSignIn = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskState": n => { this.riskState = n.getEnumValue<RiskState>(RiskState); },
            "status": n => { this.status = n.getObjectValue<SignInStatus>(createSignInStatusFromDiscriminatorValue); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddress property value. IP address of the client used to sign in. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. IP address of the client used to sign in. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Gets the isInteractive property value. Indicates if a sign-in is interactive or not.
     * @returns a boolean
     */
    public get isInteractive() {
        return this._isInteractive;
    };
    /**
     * Sets the isInteractive property value. Indicates if a sign-in is interactive or not.
     * @param value Value to set for the isInteractive property.
     */
    public set isInteractive(value: boolean | undefined) {
        this._isInteractive = value;
    };
    /**
     * Gets the location property value. Provides the city, state, and country code where the sign-in originated. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
     * @returns a signInLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. Provides the city, state, and country code where the sign-in originated. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
     * @param value Value to set for the location property.
     */
    public set location(value: SignInLocation | undefined) {
        this._location = value;
    };
    /**
     * Gets the resourceDisplayName property value. Name of the resource the user signed into. Supports $filter (eq operator only).
     * @returns a string
     */
    public get resourceDisplayName() {
        return this._resourceDisplayName;
    };
    /**
     * Sets the resourceDisplayName property value. Name of the resource the user signed into. Supports $filter (eq operator only).
     * @param value Value to set for the resourceDisplayName property.
     */
    public set resourceDisplayName(value: string | undefined) {
        this._resourceDisplayName = value;
    };
    /**
     * Gets the resourceId property value. ID of the resource that the user signed into. Supports $filter (eq operator only).
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. ID of the resource that the user signed into. Supports $filter (eq operator only).
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Gets the riskDetail property value. Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far.  Supports $filter (eq operator only).Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the value hidden.
     * @returns a riskDetail
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Sets the riskDetail property value. Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far.  Supports $filter (eq operator only).Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the value hidden.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | undefined) {
        this._riskDetail = value;
    };
    /**
     * Gets the riskEventTypes property value. Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only).
     * @returns a riskEventType
     */
    public get riskEventTypes() {
        return this._riskEventTypes;
    };
    /**
     * Sets the riskEventTypes property value. Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the riskEventTypes property.
     */
    public set riskEventTypes(value: RiskEventType[] | undefined) {
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
     * Gets the riskLevelAggregated property value. Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).  Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @returns a riskLevel
     */
    public get riskLevelAggregated() {
        return this._riskLevelAggregated;
    };
    /**
     * Sets the riskLevelAggregated property value. Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).  Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @param value Value to set for the riskLevelAggregated property.
     */
    public set riskLevelAggregated(value: RiskLevel | undefined) {
        this._riskLevelAggregated = value;
    };
    /**
     * Gets the riskLevelDuringSignIn property value. Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection.  Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @returns a riskLevel
     */
    public get riskLevelDuringSignIn() {
        return this._riskLevelDuringSignIn;
    };
    /**
     * Sets the riskLevelDuringSignIn property value. Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection.  Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     * @param value Value to set for the riskLevelDuringSignIn property.
     */
    public set riskLevelDuringSignIn(value: RiskLevel | undefined) {
        this._riskLevelDuringSignIn = value;
    };
    /**
     * Gets the riskState property value. Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. Supports $filter (eq operator only).
     * @returns a riskState
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Sets the riskState property value. Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. Supports $filter (eq operator only).
     * @param value Value to set for the riskState property.
     */
    public set riskState(value: RiskState | undefined) {
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
        writer.writeCollectionOfObjectValues<AppliedConditionalAccessPolicy>("appliedConditionalAccessPolicies", this.appliedConditionalAccessPolicies);
        writer.writeStringValue("clientAppUsed", this.clientAppUsed);
        writer.writeEnumValue<ConditionalAccessStatus>("conditionalAccessStatus", this.conditionalAccessStatus);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DeviceDetail>("deviceDetail", this.deviceDetail);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeBooleanValue("isInteractive", this.isInteractive);
        writer.writeObjectValue<SignInLocation>("location", this.location);
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        this.riskEventTypes && writer.writeEnumValue<RiskEventType>("riskEventTypes", ...this.riskEventTypes);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes_v2", this.riskEventTypes_v2);
        writer.writeEnumValue<RiskLevel>("riskLevelAggregated", this.riskLevelAggregated);
        writer.writeEnumValue<RiskLevel>("riskLevelDuringSignIn", this.riskLevelDuringSignIn);
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        writer.writeObjectValue<SignInStatus>("status", this.status);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the status property value. Sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
     * @returns a signInStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
     * @param value Value to set for the status property.
     */
    public set status(value: SignInStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the userDisplayName property value. Display name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. Display name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Gets the userId property value. ID of the user that initiated the sign-in. Supports $filter (eq operator only).
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. ID of the user that initiated the sign-in. Supports $filter (eq operator only).
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userPrincipalName property value. User principal name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. User principal name of the user that initiated the sign-in. Supports $filter (eq and startsWith operators only).
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
