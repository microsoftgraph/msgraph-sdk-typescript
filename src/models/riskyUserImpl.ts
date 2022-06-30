import {createRiskyUserHistoryItemFromDiscriminatorValue} from './createRiskyUserHistoryItemFromDiscriminatorValue';
import {EntityImpl, RiskyUserHistoryItemImpl} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {RiskyUser} from './riskyUser';
import {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityProtectionRoot singleton. */
export class RiskyUserImpl extends EntityImpl implements RiskyUser {
    /** The activity related to user risk level change */
    private _history?: RiskyUserHistoryItem[] | undefined;
    /** Indicates whether the user is deleted. Possible values are: true, false. */
    private _isDeleted?: boolean | undefined;
    /** Indicates whether a user's risky state is being processed by the backend. */
    private _isProcessing?: boolean | undefined;
    /** The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. */
    private _riskDetail?: RiskDetail | undefined;
    /** The date and time that the risky user was last updated.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _riskLastUpdatedDateTime?: Date | undefined;
    /** Level of the detected risky user. The possible values are low, medium, high, hidden, none, unknownFutureValue. */
    private _riskLevel?: RiskLevel | undefined;
    /** State of the user's risk. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. */
    private _riskState?: RiskState | undefined;
    /** Risky user display name. */
    private _userDisplayName?: string | undefined;
    /** Risky user principal name. */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new riskyUser and sets the default values.
     * @param riskyUserParameterValue 
     */
    public constructor(riskyUserParameterValue?: RiskyUser | undefined) {
        super(riskyUserParameterValue);
        this._history = riskyUserParameterValue?.history;
        this._isDeleted = riskyUserParameterValue?.isDeleted;
        this._isProcessing = riskyUserParameterValue?.isProcessing;
        this._riskDetail = riskyUserParameterValue?.riskDetail;
        this._riskLastUpdatedDateTime = riskyUserParameterValue?.riskLastUpdatedDateTime;
        this._riskLevel = riskyUserParameterValue?.riskLevel;
        this._riskState = riskyUserParameterValue?.riskState;
        this._userDisplayName = riskyUserParameterValue?.userDisplayName;
        this._userPrincipalName = riskyUserParameterValue?.userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "history": n => { this.history = n.getCollectionOfObjectValues<RiskyUserHistoryItemImpl>(createRiskyUserHistoryItemFromDiscriminatorValue); },
            "isDeleted": n => { this.isDeleted = n.getBooleanValue(); },
            "isProcessing": n => { this.isProcessing = n.getBooleanValue(); },
            "riskDetail": n => { this.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskLastUpdatedDateTime": n => { this.riskLastUpdatedDateTime = n.getDateValue(); },
            "riskLevel": n => { this.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskState": n => { this.riskState = n.getEnumValue<RiskState>(RiskState); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the history property value. The activity related to user risk level change
     * @returns a RiskyUserHistoryItemInterface
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. The activity related to user risk level change
     * @param value Value to set for the history property.
     */
    public set history(value: RiskyUserHistoryItem[] | undefined) {
        if(value) {
            const historyArrValue: RiskyUserHistoryItemImpl[] = [];
            this.history?.forEach(element => {
                historyArrValue.push((element instanceof RiskyUserHistoryItemImpl? element:new RiskyUserHistoryItemImpl(element)));
            });
            this._history = historyArrValue;
        }
    };
    /**
     * Gets the isDeleted property value. Indicates whether the user is deleted. Possible values are: true, false.
     * @returns a boolean
     */
    public get isDeleted() {
        return this._isDeleted;
    };
    /**
     * Sets the isDeleted property value. Indicates whether the user is deleted. Possible values are: true, false.
     * @param value Value to set for the isDeleted property.
     */
    public set isDeleted(value: boolean | undefined) {
        if(value) {
            this._isDeleted = value;
        }
    };
    /**
     * Gets the isProcessing property value. Indicates whether a user's risky state is being processed by the backend.
     * @returns a boolean
     */
    public get isProcessing() {
        return this._isProcessing;
    };
    /**
     * Sets the isProcessing property value. Indicates whether a user's risky state is being processed by the backend.
     * @param value Value to set for the isProcessing property.
     */
    public set isProcessing(value: boolean | undefined) {
        if(value) {
            this._isProcessing = value;
        }
    };
    /**
     * Gets the riskDetail property value. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @returns a riskDetail
     */
    public get riskDetail() {
        return this._riskDetail;
    };
    /**
     * Sets the riskDetail property value. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @param value Value to set for the riskDetail property.
     */
    public set riskDetail(value: RiskDetail | undefined) {
        if(value) {
            this._riskDetail = value;
        }
    };
    /**
     * Gets the riskLastUpdatedDateTime property value. The date and time that the risky user was last updated.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get riskLastUpdatedDateTime() {
        return this._riskLastUpdatedDateTime;
    };
    /**
     * Sets the riskLastUpdatedDateTime property value. The date and time that the risky user was last updated.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the riskLastUpdatedDateTime property.
     */
    public set riskLastUpdatedDateTime(value: Date | undefined) {
        if(value) {
            this._riskLastUpdatedDateTime = value;
        }
    };
    /**
     * Gets the riskLevel property value. Level of the detected risky user. The possible values are low, medium, high, hidden, none, unknownFutureValue.
     * @returns a riskLevel
     */
    public get riskLevel() {
        return this._riskLevel;
    };
    /**
     * Sets the riskLevel property value. Level of the detected risky user. The possible values are low, medium, high, hidden, none, unknownFutureValue.
     * @param value Value to set for the riskLevel property.
     */
    public set riskLevel(value: RiskLevel | undefined) {
        if(value) {
            this._riskLevel = value;
        }
    };
    /**
     * Gets the riskState property value. State of the user's risk. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     * @returns a riskState
     */
    public get riskState() {
        return this._riskState;
    };
    /**
     * Sets the riskState property value. State of the user's risk. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     * @param value Value to set for the riskState property.
     */
    public set riskState(value: RiskState | undefined) {
        if(value) {
            this._riskState = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.history && this.history.length != 0){        const historyArrValue: RiskyUserHistoryItemImpl[] = [];
        this.history?.forEach(element => {
            historyArrValue.push((element instanceof RiskyUserHistoryItemImpl? element:new RiskyUserHistoryItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RiskyUserHistoryItemImpl>("history", historyArrValue);
        }
        if(this.isDeleted){
            writer.writeBooleanValue("isDeleted", this.isDeleted);
        }
        if(this.isProcessing){
            writer.writeBooleanValue("isProcessing", this.isProcessing);
        }
        if(this.riskDetail){
            writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        }
        if(this.riskLastUpdatedDateTime){
            writer.writeDateValue("riskLastUpdatedDateTime", this.riskLastUpdatedDateTime);
        }
        if(this.riskLevel){
            writer.writeEnumValue<RiskLevel>("riskLevel", this.riskLevel);
        }
        if(this.riskState){
            writer.writeEnumValue<RiskState>("riskState", this.riskState);
        }
        if(this.userDisplayName){
            writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
    /**
     * Gets the userDisplayName property value. Risky user display name.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. Risky user display name.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        if(value) {
            this._userDisplayName = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. Risky user principal name.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. Risky user principal name.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
