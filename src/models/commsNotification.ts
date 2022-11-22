import {ChangeType} from './changeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CommsNotification implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The changeType property */
    private _changeType?: ChangeType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** URI of the resource that was changed. */
    private _resourceUrl?: string | undefined;
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
     * Gets the changeType property value. The changeType property
     * @returns a changeType
     */
    public get changeType() {
        return this._changeType;
    };
    /**
     * Sets the changeType property value. The changeType property
     * @param value Value to set for the changeType property.
     */
    public set changeType(value: ChangeType | undefined) {
        this._changeType = value;
    };
    /**
     * Instantiates a new commsNotification and sets the default values.
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
            "changeType": n => { this.changeType = n.getEnumValue<ChangeType>(ChangeType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "resourceUrl": n => { this.resourceUrl = n.getStringValue(); },
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
     * Gets the resourceUrl property value. URI of the resource that was changed.
     * @returns a string
     */
    public get resourceUrl() {
        return this._resourceUrl;
    };
    /**
     * Sets the resourceUrl property value. URI of the resource that was changed.
     * @param value Value to set for the resourceUrl property.
     */
    public set resourceUrl(value: string | undefined) {
        this._resourceUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ChangeType>("changeType", this.changeType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("resourceUrl", this.resourceUrl);
        writer.writeAdditionalData(this.additionalData);
    };
}
