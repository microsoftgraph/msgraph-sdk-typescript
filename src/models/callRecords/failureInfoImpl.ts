import {FailureInfo} from './failureInfo';
import {FailureStage} from './failureStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FailureInfoImpl implements AdditionalDataHolder, FailureInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Classification of why a call or portion of a call failed. */
    public reason?: string | undefined;
    /** The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue. */
    public stage?: FailureStage | undefined;
    /**
     * Instantiates a new failureInfo and sets the default values.
     * @param failureInfoParameterValue 
     */
    public constructor(failureInfoParameterValue?: FailureInfo | undefined) {
        this.additionalData = failureInfoParameterValue?.additionalData ? failureInfoParameterValue?.additionalData! : {}
        this.reason = failureInfoParameterValue?.reason ;
        this.stage = failureInfoParameterValue?.stage ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "reason": n => { this.reason = n.getStringValue(); },
            "stage": n => { this.stage = n.getEnumValue<FailureStage>(FailureStage); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.reason){
        writer.writeStringValue("reason", this.reason);
        }
        if(this.stage){
        writer.writeEnumValue<FailureStage>("stage", this.stage);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
