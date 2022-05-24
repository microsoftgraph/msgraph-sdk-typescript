import {RiskDetail} from './riskDetail';
import {RiskUserActivity} from './riskUserActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskUserActivityImpl implements AdditionalDataHolder, Parsable, RiskUserActivity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. */
    public detail?: RiskDetail | undefined;
    /** The type of risk event detected. */
    public riskEventTypes?: string[] | undefined;
    /**
     * Instantiates a new riskUserActivity and sets the default values.
     * @param riskUserActivityParameterValue 
     */
    public constructor(riskUserActivityParameterValue?: RiskUserActivity | undefined) {
        this.additionalData = riskUserActivityParameterValue?.additionalData ? riskUserActivityParameterValue?.additionalData! : {}
        this.detail = riskUserActivityParameterValue?.detail ;
        this.riskEventTypes = riskUserActivityParameterValue?.riskEventTypes ;
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
