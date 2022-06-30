import {RiskDetail} from './riskDetail';
import {RiskUserActivity} from './riskUserActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskUserActivityImpl implements RiskUserActivity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. */
    private _detail?: RiskDetail | undefined;
    /** The type of risk event detected. */
    private _riskEventTypes?: string[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new riskUserActivity and sets the default values.
     * @param riskUserActivityParameterValue 
     */
    public constructor(riskUserActivityParameterValue?: RiskUserActivity | undefined) {
        this._additionalData = riskUserActivityParameterValue?.additionalData ? riskUserActivityParameterValue?.additionalData! : {};
        this._detail = riskUserActivityParameterValue?.detail;
        this._riskEventTypes = riskUserActivityParameterValue?.riskEventTypes;
    };
    /**
     * Gets the detail property value. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @returns a riskDetail
     */
    public get detail() {
        return this._detail;
    };
    /**
     * Sets the detail property value. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @param value Value to set for the detail property.
     */
    public set detail(value: RiskDetail | undefined) {
        if(value) {
            this._detail = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "detail": n => { this.detail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskEventTypes": n => { this.riskEventTypes = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the riskEventTypes property value. The type of risk event detected.
     * @returns a string
     */
    public get riskEventTypes() {
        return this._riskEventTypes;
    };
    /**
     * Sets the riskEventTypes property value. The type of risk event detected.
     * @param value Value to set for the riskEventTypes property.
     */
    public set riskEventTypes(value: string[] | undefined) {
        if(value) {
            this._riskEventTypes = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.detail){
            writer.writeEnumValue<RiskDetail>("detail", this.detail);
        }
        if(this.riskEventTypes){
            writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", this.riskEventTypes);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
