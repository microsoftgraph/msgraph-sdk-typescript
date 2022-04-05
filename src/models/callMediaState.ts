import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallMediaState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The audio media state. Possible values are: active, inactive, unknownFutureValue.  */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
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
        this._audio = value;
    };
    /**
     * Instantiates a new callMediaState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "audio": (o, n) => { (o as unknown as CallMediaState).audio = n.getEnumValue<MediaState>(MediaState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<MediaState>("audio", this.audio);
        writer.writeAdditionalData(this.additionalData);
    };
}
