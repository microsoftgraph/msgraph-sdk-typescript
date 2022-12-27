import {createRiskyServicePrincipalHistoryItemFromDiscriminatorValue} from './createRiskyServicePrincipalHistoryItemFromDiscriminatorValue';
import {Entity, RiskyServicePrincipalHistoryItem} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreement entities.
 */
export class RiskyServicePrincipal extends Entity implements Parsable {
    /** The globally unique identifier for the associated application (its appId property), if any. */
    private _appId?: string | undefined;
    /** The display name for the service principal. */
    private _displayName?: string | undefined;
    /** Represents the risk history of Azure AD service principals. */
    private _history?: RiskyServicePrincipalHistoryItem[] | undefined;
    /** true if the service principal account is enabled; otherwise, false. */
    private _isEnabled?: boolean | undefined;
    /** Indicates whether Azure AD is currently processing the service principal's risky state. */
    private _isProcessing?: boolean | undefined;
    /** Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden,  unknownFutureValue, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal. */
    private _riskDetail?: RiskDetail | undefined;
    /** The date and time that the risk state was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2021 is 2021-01-01T00:00:00Z. Supports $filter (eq). */
    private _riskLastUpdatedDateTime?: Date | undefined;
    /** Level of the detected risky workload identity. The possible values are: low, medium, high, hidden, none, unknownFutureValue. Supports $filter (eq). */
    private _riskLevel?: RiskLevel | undefined;
    /** State of the service principal's risk. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. */
    private _riskState?: RiskState | undefined;
    /** Identifies whether the service principal represents an Application, a ManagedIdentity, or a legacy application (socialIdp). This is set by Azure AD internally and is inherited from servicePrincipal. */
    private _servicePrincipalType?: string | undefined;
    /**
     * Gets the appId property value. The globally unique identifier for the associated application (its appId property), if any.
     * @returns a string
     */
    public get appId() {
        return this._appId;
    };
    /**
     * Sets the appId property value. The globally unique identifier for the associated application (its appId property), if any.
     * @param value Value to set for the appId property.
     */
    public set appId(value: string | undefined) {
        this._appId = value;
    };
    /**
     * Instantiates a new riskyServicePrincipal and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The display name for the service principal.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the service principal.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appId": n => { this.appId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "history": n => { this.history = n.getCollectionOfObjectValues<RiskyServicePrincipalHistoryItem>(createRiskyServicePrincipalHistoryItemFromDiscriminatorValue); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "isProcessing": n => { this.isProcessing = n.getBooleanValue(); },
            "riskDetail": n => { this.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskLastUpdatedDateTime": n => { this.riskLastUpdatedDateTime = n.getDateValue(); },
            "riskLevel": n => { this.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskState": n => { this.riskState = n.getEnumValue<RiskState>(RiskState); },
            "servicePrincipalType": n => { this.servicePrincipalType = n.getStringValue(); },
        };
    };
    /**
     * Gets the history property value. Represents the risk history of Azure AD service principals.
     * @returns a riskyServicePrincipalHistoryItem
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. Represents the risk history of Azure AD service principals.
     * @param value Value to set for the history property.
     */
    public set history(value: RiskyServicePrincipalHistoryItem[] | undefined) {
        this._history = value;
    };
    /**
     * Gets the isEnabled property value. true if the service principal account is enabled; otherwise, false.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. true if the service principal account is enabled; otherwise, false.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Gets the isProcessing property value. Indicates whether Azure AD is currently processing the service principal's risky state.
     * @returns a boolean
     */
    public get isProcessing() {
        return this._isProcessing;
    };
    /**
     * Sets the isProcessing property value. Indicates whether Azure AD is currently processing the service principal's risky state.
     * @param value Value to set for the isProcessing property.
     */
    public set isProcessing(value: boolean | undefined) {
        this._isProcessing = value;
    };
    /**
     * Gets the riskDetail property value. Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden,  unknownFutureValue, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal.
     * @returns a riskDetail
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Sets the riskDetail property value. Details of the detected risk. Note: Details for this property are only available for Workload Identities Premium customers. Events in tenants without this license will be returned hidden. The possible values are: none, hidden,  unknownFutureValue, adminConfirmedServicePrincipalCompromised, adminDismissedAllRiskForServicePrincipal. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: adminConfirmedServicePrincipalCompromised , adminDismissedAllRiskForServicePrincipal.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | undefined) {
        this._riskDetail = value;
    };
    /**
     * Gets the riskLastUpdatedDateTime property value. The date and time that the risk state was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2021 is 2021-01-01T00:00:00Z. Supports $filter (eq).
     * @returns a Date
     */
    public get riskLastUpdatedDateTime() {
        return this._riskLastUpdatedDateTime;
    };
    /**
     * Sets the riskLastUpdatedDateTime property value. The date and time that the risk state was last updated. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2021 is 2021-01-01T00:00:00Z. Supports $filter (eq).
     * @param value Value to set for the riskLastUpdatedDateTime property.
     */
    public set riskLastUpdatedDateTime(value: Date | undefined) {
        this._riskLastUpdatedDateTime = value;
    };
    /**
     * Gets the riskLevel property value. Level of the detected risky workload identity. The possible values are: low, medium, high, hidden, none, unknownFutureValue. Supports $filter (eq).
     * @returns a riskLevel
     */
    public get riskLevel() {
        return this._riskLevel;
    };
    /**
     * Sets the riskLevel property value. Level of the detected risky workload identity. The possible values are: low, medium, high, hidden, none, unknownFutureValue. Supports $filter (eq).
     * @param value Value to set for the riskLevel property.
     */
    public set riskLevel(value: RiskLevel | undefined) {
        this._riskLevel = value;
    };
    /**
     * Gets the riskState property value. State of the service principal's risk. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     * @returns a riskState
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Sets the riskState property value. State of the service principal's risk. The possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
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
        writer.writeStringValue("appId", this.appId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<RiskyServicePrincipalHistoryItem>("history", this.history);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("isProcessing", this.isProcessing);
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        writer.writeDateValue("riskLastUpdatedDateTime", this.riskLastUpdatedDateTime);
        writer.writeEnumValue<RiskLevel>("riskLevel", this.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        writer.writeStringValue("servicePrincipalType", this.servicePrincipalType);
    };
    /**
     * Gets the servicePrincipalType property value. Identifies whether the service principal represents an Application, a ManagedIdentity, or a legacy application (socialIdp). This is set by Azure AD internally and is inherited from servicePrincipal.
     * @returns a string
     */
    public get servicePrincipalType() {
        return this._servicePrincipalType;
    };
    /**
     * Sets the servicePrincipalType property value. Identifies whether the service principal represents an Application, a ManagedIdentity, or a legacy application (socialIdp). This is set by Azure AD internally and is inherited from servicePrincipal.
     * @param value Value to set for the servicePrincipalType property.
     */
    public set servicePrincipalType(value: string | undefined) {
        this._servicePrincipalType = value;
    };
}
