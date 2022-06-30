import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** OMA Settings definition. */
export class OmaSettingImpl implements OmaSetting {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Description. */
    private _description?: string | undefined;
    /** Display Name. */
    private _displayName?: string | undefined;
    /** OMA. */
    private _omaUri?: string | undefined;
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
     * Instantiates a new omaSetting and sets the default values.
     * @param omaSettingParameterValue 
     */
    public constructor(omaSettingParameterValue?: OmaSetting | undefined) {
        this._additionalData = omaSettingParameterValue?.additionalData ? omaSettingParameterValue?.additionalData! : {};
        this._description = omaSettingParameterValue?.description;
        this._displayName = omaSettingParameterValue?.displayName;
        this._omaUri = omaSettingParameterValue?.omaUri;
    };
    /**
     * Gets the description property value. Description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. Display Name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display Name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "omaUri": n => { this.omaUri = n.getStringValue(); },
        };
    };
    /**
     * Gets the omaUri property value. OMA.
     * @returns a string
     */
    public get omaUri() {
        return this._omaUri;
    };
    /**
     * Sets the omaUri property value. OMA.
     * @param value Value to set for the omaUri property.
     */
    public set omaUri(value: string | undefined) {
        if(value) {
            this._omaUri = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.omaUri){
            writer.writeStringValue("omaUri", this.omaUri);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
