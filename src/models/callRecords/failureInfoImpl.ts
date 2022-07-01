import {FailureInfo} from './failureInfo';
import {FailureStage} from './failureStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FailureInfoImpl implements FailureInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Classification of why a call or portion of a call failed. */
    private _reason?: string | undefined;
    /** The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue. */
    private _stage?: FailureStage | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new failureInfo and sets the default values.
     * @param failureInfoParameterValue 
     */
    public constructor(failureInfoParameterValue?: FailureInfo | undefined) {
        this._additionalData = failureInfoParameterValue?.additionalData ? failureInfoParameterValue?.additionalData! : {};
        this._reason = failureInfoParameterValue?.reason;
        this._stage = failureInfoParameterValue?.stage;
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
     * Gets the reason property value. Classification of why a call or portion of a call failed.
     * @returns a string
     */
    public get reason() {
        return this._reason;
    };
    /**
     * Sets the reason property value. Classification of why a call or portion of a call failed.
     * @param value Value to set for the reason property.
     */
    public set reason(value: string | undefined) {
        if(value) {
            this._reason = value;
        }
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
    /**
     * Gets the stage property value. The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue.
     * @returns a failureStage
     */
    public get stage() {
        return this._stage;
    };
    /**
     * Sets the stage property value. The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue.
     * @param value Value to set for the stage property.
     */
    public set stage(value: FailureStage | undefined) {
        if(value) {
            this._stage = value;
        }
    };
}
