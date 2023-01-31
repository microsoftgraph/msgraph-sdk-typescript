import {Tone} from './tone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ToneInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _odataType?: string | undefined;
    /** An incremental identifier used for ordering DTMF events. */
    private _sequenceId?: number | undefined;
    private _tone?: Tone | undefined;
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
     * Instantiates a new toneInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "sequenceId": n => { this.sequenceId = n.getNumberValue(); },
            "tone": n => { this.tone = n.getEnumValue<Tone>(Tone); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the sequenceId property value. An incremental identifier used for ordering DTMF events.
     * @returns a int64
     */
    public get sequenceId() {
        return this._sequenceId;
    };
    /**
     * Sets the sequenceId property value. An incremental identifier used for ordering DTMF events.
     * @param value Value to set for the sequenceId property.
     */
    public set sequenceId(value: number | undefined) {
        this._sequenceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("sequenceId", this.sequenceId);
        writer.writeEnumValue<Tone>("tone", this.tone);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tone property value. 
     * @returns a tone
     */
    public get tone() {
        return this._tone;
    };
    /**
     * Sets the tone property value. 
     * @param value Value to set for the tone property.
     */
    public set tone(value: Tone | undefined) {
        this._tone = value;
    };
}
