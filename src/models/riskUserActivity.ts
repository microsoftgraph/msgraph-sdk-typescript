import {RiskDetail} from './riskDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskUserActivity implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. */
    private _detail?: RiskDetail | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new riskUserActivity and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.riskUserActivity";
    };
    /**
     * Gets the detail property value. Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @returns a riskDetail
     */
    public get detail() {
        return this._detail;
    };
    /**
     * Sets the detail property value. Details of the detected risk. Possible values are: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue.
     * @param value Value to set for the detail property.
     */
    public set detail(value: RiskDetail | undefined) {
        this._detail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "detail": n => { this.detail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "riskEventTypes": n => { this.riskEventTypes = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
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
        this._riskEventTypes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<RiskDetail>("detail", this.detail);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", this.riskEventTypes);
        writer.writeAdditionalData(this.additionalData);
    };
}
