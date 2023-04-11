import {ActivityType} from './activityType';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {Entity, SignInLocation} from './index';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServicePrincipalRiskDetection extends Entity implements Parsable {
    /** Indicates the activity type the detected risk is linked to.  The possible values are: signin, servicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: servicePrincipal. */
    private _activity?: ActivityType | undefined;
    /** Date and time when the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _activityDateTime?: Date | undefined;
    /** Additional information associated with the risk detection. This string value is represented as a JSON object with the quotations escaped. */
    private _additionalInfo?: string | undefined;
    /** The unique identifier for the associated application. */
    private _appId?: string | undefined;
    /** Correlation ID of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity. */
    private _correlationId?: string | undefined;
    /** Date and time when the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _detectedDateTime?: Date | undefined;
    /** Timing of the detected risk , whether real-time or offline. The possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue. */
    private _detectionTimingType?: RiskDetectionTimingType | undefined;
    /** Provides the IP address of the client from where the risk occurred. */
    private _ipAddress?: string | undefined;
    /** The unique identifier for the key credential associated with the risk detection. */
    private _keyIds?: string[] | undefined;
    /** Date and time when the risk detection was last updated. */
    private _lastUpdatedDateTime?: Date | undefined;
    /** Location from where the sign-in was initiated. */
    private _location?: SignInLocation | undefined;
    /** Request identifier of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity. Supports $filter (eq). */
    private _requestId?: string | undefined;
    /** Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal. */
    private _riskDetail?: RiskDetail | undefined;
    /** The type of risk event detected. The possible values are: investigationsThreatIntelligence, generic, adminConfirmedServicePrincipalCompromised, suspiciousSignins, leakedCredentials, anomalousServicePrincipalActivity, maliciousApplication, suspiciousApplication. */
    private _riskEventType?: string | undefined;
    /** Level of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: low, medium, high, hidden, none. */
    private _riskLevel?: RiskLevel | undefined;
    /** The state of a detected risky service principal or sign-in activity. The possible values are: none, dismissed, atRisk, confirmedCompromised. */
    private _riskState?: RiskState | undefined;
    /** The display name for the service principal. */
    private _servicePrincipalDisplayName?: string | undefined;
    /** The unique identifier for the service principal. Supports $filter (eq). */
    private _servicePrincipalId?: string | undefined;
    /** Source of the risk detection. For example, identityProtection. */
    private _source?: string | undefined;
    /** Indicates the type of token issuer for the detected sign-in risk. The possible values are: AzureAD. */
    private _tokenIssuerType?: TokenIssuerType | undefined;
    /**
     * Gets the activity property value. Indicates the activity type the detected risk is linked to.  The possible values are: signin, servicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: servicePrincipal.
     * @returns a activityType
     */
    public get activity() {
        return this._activity;
    };
    /**
     * Sets the activity property value. Indicates the activity type the detected risk is linked to.  The possible values are: signin, servicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: servicePrincipal.
     * @param value Value to set for the activity property.
     */
    public set activity(value: ActivityType | undefined) {
        this._activity = value;
    };
    /**
     * Gets the activityDateTime property value. Date and time when the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get activityDateTime() {
        return this._activityDateTime;
    };
    /**
     * Sets the activityDateTime property value. Date and time when the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the activityDateTime property.
     */
    public set activityDateTime(value: Date | undefined) {
        this._activityDateTime = value;
    };
    /**
     * Gets the additionalInfo property value. Additional information associated with the risk detection. This string value is represented as a JSON object with the quotations escaped.
     * @returns a string
     */
    public get additionalInfo() {
        return this._additionalInfo;
    };
    /**
     * Sets the additionalInfo property value. Additional information associated with the risk detection. This string value is represented as a JSON object with the quotations escaped.
     * @param value Value to set for the additionalInfo property.
     */
    public set additionalInfo(value: string | undefined) {
        this._additionalInfo = value;
    };
    /**
     * Gets the appId property value. The unique identifier for the associated application.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The unique identifier for the associated application.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new servicePrincipalRiskDetection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the correlationId property value. Correlation ID of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. Correlation ID of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the detectedDateTime property value. Date and time when the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get detectedDateTime() {
        return this._detectedDateTime;
    };
    /**
     * Sets the detectedDateTime property value. Date and time when the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the detectedDateTime property.
     */
    public set detectedDateTime(value: Date | undefined) {
        this._detectedDateTime = value;
    };
    /**
     * Gets the detectionTimingType property value. Timing of the detected risk , whether real-time or offline. The possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue.
     * @returns a riskDetectionTimingType
     */
    public get detectionTimingType() {
        return this._detectionTimingType;
    };
    /**
     * Sets the detectionTimingType property value. Timing of the detected risk , whether real-time or offline. The possible values are: notDefined, realtime, nearRealtime, offline, unknownFutureValue.
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
            "appId": n => { this.appId = n.getStringValue(); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "detectedDateTime": n => { this.detectedDateTime = n.getDateValue(); },
            "detectionTimingType": n => { this.detectionTimingType = n.getEnumValue<RiskDetectionTimingType>(RiskDetectionTimingType); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "keyIds": n => { this.keyIds = n.getCollectionOfPrimitiveValues<string>(); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "location": n => { this.location = n.getObjectValue<SignInLocation>(createSignInLocationFromDiscriminatorValue); },
            "requestId": n => { this.requestId = n.getStringValue(); },
            "riskDetail": n => { this.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskEventType": n => { this.riskEventType = n.getStringValue(); },
            "riskLevel": n => { this.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskState": n => { this.riskState = n.getEnumValue<RiskState>(RiskState); },
            "servicePrincipalDisplayName": n => { this.servicePrincipalDisplayName = n.getStringValue(); },
            "servicePrincipalId": n => { this.servicePrincipalId = n.getStringValue(); },
            "source": n => { this.source = n.getStringValue(); },
            "tokenIssuerType": n => { this.tokenIssuerType = n.getEnumValue<TokenIssuerType>(TokenIssuerType); },
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
     * Gets the keyIds property value. The unique identifier for the key credential associated with the risk detection.
     * @returns a string
     */
    public get keyIds() {
        return this._keyIds;
    };
    /**
     * Sets the keyIds property value. The unique identifier for the key credential associated with the risk detection.
     * @param value Value to set for the keyIds property.
     */
    public set keyIds(value: string[] | undefined) {
        this._keyIds = value;
    };
    /**
     * Gets the lastUpdatedDateTime property value. Date and time when the risk detection was last updated.
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Date and time when the risk detection was last updated.
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Gets the location property value. Location from where the sign-in was initiated.
     * @returns a signInLocation
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. Location from where the sign-in was initiated.
     * @param value Value to set for the location property.
     */
    public set location(value: SignInLocation | undefined) {
        this._location = value;
    };
    /**
     * Gets the requestId property value. Request identifier of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity. Supports $filter (eq).
     * @returns a string
     */
    public get requestId() {
        return this._requestId;
    };
    /**
     * Sets the requestId property value. Request identifier of the sign-in activity associated with the risk detection. This property is null if the risk detection is not associated with a sign-in activity. Supports $filter (eq).
     * @param value Value to set for the requestId property.
     */
    public set requestId(value: string | undefined) {
        this._requestId = value;
    };
    /**
     * Gets the riskDetail property value. Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal.
     * @returns a riskDetail
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Sets the riskDetail property value. Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | undefined) {
        this._riskDetail = value;
    };
    /**
     * Gets the riskEventType property value. The type of risk event detected. The possible values are: investigationsThreatIntelligence, generic, adminConfirmedServicePrincipalCompromised, suspiciousSignins, leakedCredentials, anomalousServicePrincipalActivity, maliciousApplication, suspiciousApplication.
     * @returns a string
     */
    public get riskEventType() {
        return this._riskEventType;
    };
    /**
     * Sets the riskEventType property value. The type of risk event detected. The possible values are: investigationsThreatIntelligence, generic, adminConfirmedServicePrincipalCompromised, suspiciousSignins, leakedCredentials, anomalousServicePrincipalActivity, maliciousApplication, suspiciousApplication.
     * @param value Value to set for the riskEventType property.
     */
    public set riskEventType(value: string | undefined) {
        this._riskEventType = value;
    };
    /**
     * Gets the riskLevel property value. Level of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: low, medium, high, hidden, none.
     * @returns a riskLevel
     */
    public get riskLevel() {
        return this._riskLevel;
    };
    /**
     * Sets the riskLevel property value. Level of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: low, medium, high, hidden, none.
     * @param value Value to set for the riskLevel property.
     */
    public set riskLevel(value: RiskLevel | undefined) {
        this._riskLevel = value;
    };
    /**
     * Gets the riskState property value. The state of a detected risky service principal or sign-in activity. The possible values are: none, dismissed, atRisk, confirmedCompromised.
     * @returns a riskState
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Sets the riskState property value. The state of a detected risky service principal or sign-in activity. The possible values are: none, dismissed, atRisk, confirmedCompromised.
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
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("detectedDateTime", this.detectedDateTime);
        writer.writeEnumValue<RiskDetectionTimingType>("detectionTimingType", this.detectionTimingType);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeCollectionOfPrimitiveValues<string>("keyIds", this.keyIds);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeObjectValue<SignInLocation>("location", this.location);
        writer.writeStringValue("requestId", this.requestId);
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        writer.writeStringValue("riskEventType", this.riskEventType);
        writer.writeEnumValue<RiskLevel>("riskLevel", this.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        writer.writeStringValue("servicePrincipalDisplayName", this.servicePrincipalDisplayName);
        writer.writeStringValue("servicePrincipalId", this.servicePrincipalId);
        writer.writeStringValue("source", this.source);
        writer.writeEnumValue<TokenIssuerType>("tokenIssuerType", this.tokenIssuerType);
    };
    /**
     * Gets the servicePrincipalDisplayName property value. The display name for the service principal.
     * @returns a string
     */
    public get servicePrincipalDisplayName() {
        return this._servicePrincipalDisplayName;
    };
    /**
     * Sets the servicePrincipalDisplayName property value. The display name for the service principal.
     * @param value Value to set for the servicePrincipalDisplayName property.
     */
    public set servicePrincipalDisplayName(value: string | undefined) {
        this._servicePrincipalDisplayName = value;
    };
    /**
     * Gets the servicePrincipalId property value. The unique identifier for the service principal. Supports $filter (eq).
     * @returns a string
     */
    public get servicePrincipalId() {
        return this._servicePrincipalId;
    };
    /**
     * Sets the servicePrincipalId property value. The unique identifier for the service principal. Supports $filter (eq).
     * @param value Value to set for the servicePrincipalId property.
     */
    public set servicePrincipalId(value: string | undefined) {
        this._servicePrincipalId = value;
    };
    /**
     * Gets the source property value. Source of the risk detection. For example, identityProtection.
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. Source of the risk detection. For example, identityProtection.
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
    /**
     * Gets the tokenIssuerType property value. Indicates the type of token issuer for the detected sign-in risk. The possible values are: AzureAD.
     * @returns a tokenIssuerType
     */
    public get tokenIssuerType() {
        return this._tokenIssuerType;
    };
    /**
     * Sets the tokenIssuerType property value. Indicates the type of token issuer for the detected sign-in risk. The possible values are: AzureAD.
     * @param value Value to set for the tokenIssuerType property.
     */
    public set tokenIssuerType(value: TokenIssuerType | undefined) {
        this._tokenIssuerType = value;
    };
}
