import {createRiskyUserHistoryItemFromDiscriminatorValue} from './createRiskyUserHistoryItemFromDiscriminatorValue';
import {EntityImpl, RiskyUserHistoryItemImpl} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {RiskyUser} from './riskyUser';
import {RiskyUserHistoryItem} from './riskyUserHistoryItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityProtectionRoot singleton. */
export class RiskyUserImpl extends EntityImpl implements Parsable, RiskyUser {
    /** The activity related to user risk level change */
    public history?: RiskyUserHistoryItem[] | undefined;
    /** Indicates whether the user is deleted. Possible values are: true, false. */
    public isDeleted?: boolean | undefined;
    /** Indicates whether a user's risky state is being processed by the backend. */
    public isProcessing?: boolean | undefined;
    /** The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. */
    public riskDetail?: RiskDetail | undefined;
    /** The date and time that the risky user was last updated.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public riskLastUpdatedDateTime?: Date | undefined;
    /** Level of the detected risky user. The possible values are low, medium, high, hidden, none, unknownFutureValue. */
    public riskLevel?: RiskLevel | undefined;
    /** State of the user's risk. Possible values are: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, unknownFutureValue. */
    public riskState?: RiskState | undefined;
    /** Risky user display name. */
    public userDisplayName?: string | undefined;
    /** Risky user principal name. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new riskyUser and sets the default values.
     * @param riskyUserParameterValue 
     */
    public constructor(riskyUserParameterValue?: RiskyUser | undefined) {
        super();
        this.history = riskyUserParameterValue?.history ;
        this.isDeleted = riskyUserParameterValue?.isDeleted ;
        this.isProcessing = riskyUserParameterValue?.isProcessing ;
        this.riskDetail = riskyUserParameterValue?.riskDetail ;
        this.riskLastUpdatedDateTime = riskyUserParameterValue?.riskLastUpdatedDateTime ;
        this.riskLevel = riskyUserParameterValue?.riskLevel ;
        this.riskState = riskyUserParameterValue?.riskState ;
        this.userDisplayName = riskyUserParameterValue?.userDisplayName ;
        this.userPrincipalName = riskyUserParameterValue?.userPrincipalName ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.history && this.history.length != 0){        const historyArrValue: RiskyUserHistoryItemImpl[] = []; this.history?.forEach(element => {historyArrValue.push(new RiskyUserHistoryItemImpl(element));});
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
}
