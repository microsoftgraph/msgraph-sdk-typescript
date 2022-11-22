import {MediaDirection} from './mediaDirection';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaStream implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The direction property */
    private _direction?: MediaDirection | undefined;
    /** The media stream label. */
    private _label?: string | undefined;
    /** The mediaType property */
    private _mediaType?: Modality | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** If the media is muted by the server. */
    private _serverMuted?: boolean | undefined;
    /** The source ID. */
    private _sourceId?: string | undefined;
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
     * Instantiates a new mediaStream and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the direction property value. The direction property
     * @returns a mediaDirection
     */
    public get direction() {
        return this._direction;
    };
    /**
     * Sets the direction property value. The direction property
     * @param value Value to set for the direction property.
     */
    public set direction(value: MediaDirection | undefined) {
        this._direction = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "direction": n => { this.direction = n.getEnumValue<MediaDirection>(MediaDirection); },
            "label": n => { this.label = n.getStringValue(); },
            "mediaType": n => { this.mediaType = n.getEnumValue<Modality>(Modality); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "serverMuted": n => { this.serverMuted = n.getBooleanValue(); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the label property value. The media stream label.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. The media stream label.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Gets the mediaType property value. The mediaType property
     * @returns a modality
     */
    public get mediaType() {
        return this._mediaType;
    };
    /**
     * Sets the mediaType property value. The mediaType property
     * @param value Value to set for the mediaType property.
     */
    public set mediaType(value: Modality | undefined) {
        this._mediaType = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<MediaDirection>("direction", this.direction);
        writer.writeStringValue("label", this.label);
        writer.writeEnumValue<Modality>("mediaType", this.mediaType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("serverMuted", this.serverMuted);
        writer.writeStringValue("sourceId", this.sourceId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the serverMuted property value. If the media is muted by the server.
     * @returns a boolean
     */
    public get serverMuted() {
        return this._serverMuted;
    };
    /**
     * Sets the serverMuted property value. If the media is muted by the server.
     * @param value Value to set for the serverMuted property.
     */
    public set serverMuted(value: boolean | undefined) {
        this._serverMuted = value;
    };
    /**
     * Gets the sourceId property value. The source ID.
     * @returns a string
     */
    public get sourceId() {
        return this._sourceId;
    };
    /**
     * Sets the sourceId property value. The source ID.
     * @param value Value to set for the sourceId property.
     */
    public set sourceId(value: string | undefined) {
        this._sourceId = value;
    };
}
