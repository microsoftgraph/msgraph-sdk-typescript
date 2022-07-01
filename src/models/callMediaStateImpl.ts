import {CallMediaState} from './callMediaState';
import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallMediaStateImpl implements CallMediaState {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The audio media state. Possible values are: active, inactive, unknownFutureValue. */
    private _audio?: MediaState | undefined;
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
     * Gets the audio property value. The audio media state. Possible values are: active, inactive, unknownFutureValue.
     * @returns a mediaState
     */
    public get audio() {
        return this._audio;
    };
    /**
     * Sets the audio property value. The audio media state. Possible values are: active, inactive, unknownFutureValue.
     * @param value Value to set for the audio property.
     */
    public set audio(value: MediaState | undefined) {
        if(value) {
            this._audio = value;
        }
    };
    /**
     * Instantiates a new callMediaState and sets the default values.
     * @param callMediaStateParameterValue 
     */
    public constructor(callMediaStateParameterValue?: CallMediaState | undefined) {
        this._additionalData = callMediaStateParameterValue?.additionalData ? callMediaStateParameterValue?.additionalData! : {};
        this._audio = callMediaStateParameterValue?.audio;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "audio": n => { this.audio = n.getEnumValue<MediaState>(MediaState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.audio){
            writer.writeEnumValue<MediaState>("audio", this.audio);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
