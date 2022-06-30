import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** App for Windows information protection */
export class WindowsInformationProtectionAppImpl implements WindowsInformationProtectionApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If true, app is denied protection or exemption. */
    private _denied?: boolean | undefined;
    /** The app's description. */
    private _description?: string | undefined;
    /** App display name. */
    private _displayName?: string | undefined;
    /** The product name. */
    private _productName?: string | undefined;
    /** The publisher name */
    private _publisherName?: string | undefined;
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
     * Instantiates a new windowsInformationProtectionApp and sets the default values.
     * @param windowsInformationProtectionAppParameterValue 
     */
    public constructor(windowsInformationProtectionAppParameterValue?: WindowsInformationProtectionApp | undefined) {
        this._additionalData = windowsInformationProtectionAppParameterValue?.additionalData ? windowsInformationProtectionAppParameterValue?.additionalData! : {};
        this._denied = windowsInformationProtectionAppParameterValue?.denied;
        this._description = windowsInformationProtectionAppParameterValue?.description;
        this._displayName = windowsInformationProtectionAppParameterValue?.displayName;
        this._productName = windowsInformationProtectionAppParameterValue?.productName;
        this._publisherName = windowsInformationProtectionAppParameterValue?.publisherName;
    };
    /**
     * Gets the denied property value. If true, app is denied protection or exemption.
     * @returns a boolean
     */
    public get denied() {
        return this._denied;
    };
    /**
     * Sets the denied property value. If true, app is denied protection or exemption.
     * @param value Value to set for the denied property.
     */
    public set denied(value: boolean | undefined) {
        if(value) {
            this._denied = value;
        }
    };
    /**
     * Gets the description property value. The app's description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The app's description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. App display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. App display name.
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
            "denied": n => { this.denied = n.getBooleanValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "productName": n => { this.productName = n.getStringValue(); },
            "publisherName": n => { this.publisherName = n.getStringValue(); },
        };
    };
    /**
     * Gets the productName property value. The product name.
     * @returns a string
     */
    public get productName() {
        return this._productName;
    };
    /**
     * Sets the productName property value. The product name.
     * @param value Value to set for the productName property.
     */
    public set productName(value: string | undefined) {
        if(value) {
            this._productName = value;
        }
    };
    /**
     * Gets the publisherName property value. The publisher name
     * @returns a string
     */
    public get publisherName() {
        return this._publisherName;
    };
    /**
     * Sets the publisherName property value. The publisher name
     * @param value Value to set for the publisherName property.
     */
    public set publisherName(value: string | undefined) {
        if(value) {
            this._publisherName = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.denied){
            writer.writeBooleanValue("denied", this.denied);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.productName){
            writer.writeStringValue("productName", this.productName);
        }
        if(this.publisherName){
            writer.writeStringValue("publisherName", this.publisherName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
