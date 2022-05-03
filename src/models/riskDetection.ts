import {ActivityType} from './activityType';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {Entity, SignInLocation} from './index';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskDetection extends Entity implements Parsable {
    /** Indicates the activity type the detected risk is linked to. The possible values are signin, user, unknownFutureValue.  */
    private _activity?: ActivityType | undefined;
    /** Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _activityDateTime?: Date | undefined;
    /** Additional information associated with the risk detection in JSON format.  */
    private _additionalInfo?: string | undefined;
    /** Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.  */
    private _correlationId?: string | undefined;
    /** Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _detectedDateTime?: Date | undefined;
    /** Timing of the detected risk (real-time/offline). The possible values are notDefined, realtime, nearRealtime, offline, unknownFutureValue.  */
    private _detectionTimingType?: RiskDetectionTimingType | undefined;
    /** Provides the IP address of the client from where the risk occurred.  */
    private _ipAddress?: string | undefined;
    /** Date and time that the risk detection was last updated.  */
    private _lastUpdatedDateTime?: Date | undefined;
    /** Location of the sign-in.  */
    private _location?: SignInLocation | undefined;
    /** Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.  */
    private _requestId?: string | undefined;
    /** Details of the detected risk. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden.  */
    private _riskDetail?: RiskDetail | undefined;
    /** The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, mcasImpossibleTravel, mcasSuspiciousInboxManipulationRules, investigationsThreatIntelligenceSigninLinked, maliciousIPAddressValidCredentialsBlockedIP, and unknownFutureValue.  For more information about each value, see riskEventType values.  */
    private _riskEventType?: string | undefined;
    /** Level of the detected risk. The possible values are low, medium, high, hidden, none, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden.  */
    private _riskLevel?: RiskLevel | undefined;
    /** The state of a detected risky user or sign-in. The possible values are none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, and unknownFutureValue.  */
    private _riskState?: RiskState | undefined;
    /** Source of the risk detection. For example, activeDirectory.  */
    private _source?: string | undefined;
    /** Indicates the type of token issuer for the detected sign-in risk. The possible values are AzureAD, ADFederationServices, and unknownFutureValue.  */
    private _tokenIssuerType?: TokenIssuerType | undefined;
    /** Name of the user.  */
    private _userDisplayName?: string | undefined;
    /** Unique ID of the user.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _userId?: string | undefined;
    /** The user principal name (UPN) of the user.  */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the activity property value. Indicates the activity type the detected risk is linked to. The possible values are signin, user, unknownFutureValue.
     * @returns a activityType
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. Indicates the activity type the detected risk is linked to. The possible values are signin, user, unknownFutureValue.
     * @param value Value to set for the activity property.
     */
    public set activity(value: ActivityType | undefined) {
        this._activity = value;
    };
    /**
     * Gets the activityDateTime property value. Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get activityDateTime() {
        return this._activityDateTime;
    };
    /**
     * Sets the activityDateTime property value. Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the activityDateTime property.
     */
    public set activityDateTime(value: Date | undefined) {
        this._activityDateTime = value;
    };
    /**
     * Gets the additionalInfo property value. Additional information associated with the risk detection in JSON format.
     * @returns a string
     */
    public get additionalInfo() {
        return this._additionalInfo;
    };
    /**
     * Sets the additionalInfo property value. Additional information associated with the risk detection in JSON format.
     * @param value Value to set for the additionalInfo property.
     */
    public set additionalInfo(value: string | undefined) {
        this._additionalInfo = value;
    };
    /**
     * Instantiates a new riskDetection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the correlationId property value. Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the detectedDateTime property value. Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get detectedDateTime() {
        return this._detectedDateTime;
    };
    /**
     * Sets the detectedDateTime property value. Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the detectedDateTime property.
     */
    public set detectedDateTime(value: Date | undefined) {
        this._detectedDateTime = value;
    };
    /**
     * Gets the detectionTimingType property value. Timing of the detected risk (real-time/offline). The possible values are notDefined, realtime, nearRealtime, offline, unknownFutureValue.
     * @returns a riskDetectionTimingType
     */
    public get detectionTimingType() {
        return this._detectionTimingType;
    };
    /**
     * Sets the detectionTimingType property value. Timing of the detected risk (real-time/offline). The possible values are notDefined, realtime, nearRealtime, offline, unknownFutureValue.
     * @param value Value to set for the detectionTimingType property.
     */
    public set detectionTimingType(value: RiskDetectionTimingType | undefined) {
        this._detectionTimingType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activity": n => { this.activity = n.getEnumValue<ActivityType>(ActivityType); },
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "additionalInfo": n => { this.additionalInfo = n.getStringValue(); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "detectedDateTime": n => { this.detectedDateTime = n.getDateValue(); },
            "detectionTimingType": n => { this.detectionTimingType = n.getEnumValue<RiskDetectionTimingType>(RiskDetectionTimingType); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "location": n => { this.location = n.getObjectValue<SignInLocation>(createSignInLocationFromDiscriminatorValue); },
            "requestId": n => { this.requestId = n.getStringValue(); },
            "riskDetail": n => { this.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskEventType": n => { this.riskEventType = n.getStringValue(); },
            "riskLevel": n => { this.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskState": n => { this.riskState = n.getEnumValue<RiskState>(RiskState); },
            "source": n => { this.source = n.getStringValue(); },
            "tokenIssuerType": n => { this.tokenIssuerType = n.getEnumValue<TokenIssuerType>(TokenIssuerType); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddress property value. Provides the IP address of the client from where the risk occurred.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. Provides the IP address of the client from where the risk occurred.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
    };
    /**
     * Gets the lastUpdatedDateTime property value. Date and time that the risk detection was last updated.
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Date and time that the risk detection was last updated.
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Gets the location property value. Location of the sign-in.
     * @returns a signInLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. Location of the sign-in.
     * @param value Value to set for the location property.
     */
    public set location(value: SignInLocation | undefined) {
        this._location = value;
    };
    /**
     * Gets the requestId property value. Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @returns a string
     */
    public get requestId() {
        return this._requestId;
    };
    /**
     * Sets the requestId property value. Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in.
     * @param value Value to set for the requestId property.
     */
    public set requestId(value: string | undefined) {
        this._requestId = value;
    };
    /**
     * Gets the riskDetail property value. Details of the detected risk. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden.
     * @returns a riskDetail
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Sets the riskDetail property value. Details of the detected risk. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | undefined) {
        this._riskDetail = value;
    };
    /**
     * Gets the riskEventType property value. The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, mcasImpossibleTravel, mcasSuspiciousInboxManipulationRules, investigationsThreatIntelligenceSigninLinked, maliciousIPAddressValidCredentialsBlockedIP, and unknownFutureValue.  For more information about each value, see riskEventType values.
     * @returns a string
     */
    public get riskEventType() {
        return this._riskEventType;
    };
    /**
     * Sets the riskEventType property value. The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, mcasImpossibleTravel, mcasSuspiciousInboxManipulationRules, investigationsThreatIntelligenceSigninLinked, maliciousIPAddressValidCredentialsBlockedIP, and unknownFutureValue.  For more information about each value, see riskEventType values.
     * @param value Value to set for the riskEventType property.
     */
    public set riskEventType(value: string | undefined) {
        this._riskEventType = value;
    };
    /**
     * Gets the riskLevel property value. Level of the detected risk. The possible values are low, medium, high, hidden, none, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden.
     * @returns a riskLevel
     */
    public get riskLevel() {
        return this._riskLevel;
    };
    /**
     * Sets the riskLevel property value. Level of the detected risk. The possible values are low, medium, high, hidden, none, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden.
     * @param value Value to set for the riskLevel property.
     */
    public set riskLevel(value: RiskLevel | undefined) {
        this._riskLevel = value;
    };
    /**
     * Gets the riskState property value. The state of a detected risky user or sign-in. The possible values are none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, and unknownFutureValue.
     * @returns a riskState
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Sets the riskState property value. The state of a detected risky user or sign-in. The possible values are none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, and unknownFutureValue.
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
        writer.writeEnumValue<ActivityType>("activity", this.activity);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeStringValue("additionalInfo", this.additionalInfo);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("detectedDateTime", this.detectedDateTime);
        writer.writeEnumValue<RiskDetectionTimingType>("detectionTimingType", this.detectionTimingType);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeObjectValue<SignInLocation>("location", this.location);
        writer.writeStringValue("requestId", this.requestId);
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        writer.writeStringValue("riskEventType", this.riskEventType);
        writer.writeEnumValue<RiskLevel>("riskLevel", this.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        writer.writeStringValue("source", this.source);
        writer.writeEnumValue<TokenIssuerType>("tokenIssuerType", this.tokenIssuerType);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the source property value. Source of the risk detection. For example, activeDirectory.
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. Source of the risk detection. For example, activeDirectory.
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
    /**
     * Gets the tokenIssuerType property value. Indicates the type of token issuer for the detected sign-in risk. The possible values are AzureAD, ADFederationServices, and unknownFutureValue.
     * @returns a tokenIssuerType
     */
    public get tokenIssuerType() {
        return this._tokenIssuerType;
    };
    /**
     * Sets the tokenIssuerType property value. Indicates the type of token issuer for the detected sign-in risk. The possible values are AzureAD, ADFederationServices, and unknownFutureValue.
     * @param value Value to set for the tokenIssuerType property.
     */
    public set tokenIssuerType(value: TokenIssuerType | undefined) {
        this._tokenIssuerType = value;
    };
    /**
     * Gets the userDisplayName property value. Name of the user.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. Name of the user.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Gets the userId property value. Unique ID of the user.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Unique ID of the user.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the user.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the user.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
