import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties of the possible iOS device types the mobile app can run on. */
export class IosDeviceType implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Whether the app should run on iPads. */
    private _iPad?: boolean | undefined;
    /** Whether the app should run on iPhones and iPods. */
    private _iPhoneAndIPod?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new iosDeviceType and sets the default values.
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
            "iPad": n => { this.iPad = n.getBooleanValue(); },
            "iPhoneAndIPod": n => { this.iPhoneAndIPod = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the iPad property value. Whether the app should run on iPads.
     * @returns a boolean
     */
    public get iPad() {
        return this._iPad;
    };
    /**
     * Sets the iPad property value. Whether the app should run on iPads.
     * @param value Value to set for the iPad property.
     */
    public set iPad(value: boolean | undefined) {
        this._iPad = value;
    };
    /**
     * Gets the iPhoneAndIPod property value. Whether the app should run on iPhones and iPods.
     * @returns a boolean
     */
    public get iPhoneAndIPod() {
        return this._iPhoneAndIPod;
    };
    /**
     * Sets the iPhoneAndIPod property value. Whether the app should run on iPhones and iPods.
     * @param value Value to set for the iPhoneAndIPod property.
     */
    public set iPhoneAndIPod(value: boolean | undefined) {
        this._iPhoneAndIPod = value;
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
        writer.writeBooleanValue("iPad", this.iPad);
        writer.writeBooleanValue("iPhoneAndIPod", this.iPhoneAndIPod);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
