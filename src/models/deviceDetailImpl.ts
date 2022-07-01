import {DeviceDetail} from './deviceDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceDetailImpl implements DeviceDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Indicates the browser information of the used for signing-in. */
    private _browser?: string | undefined;
    /** Refers to the UniqueID of the device used for signing-in. */
    private _deviceId?: string | undefined;
    /** Refers to the name of the device used for signing-in. */
    private _displayName?: string | undefined;
    /** Indicates whether the device is compliant or not. */
    private _isCompliant?: boolean | undefined;
    /** Indicates if the device is managed or not. */
    private _isManaged?: boolean | undefined;
    /** Indicates the OS name and version used for signing-in. */
    private _operatingSystem?: string | undefined;
    /** Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined. */
    private _trustType?: string | undefined;
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
     * Gets the browser property value. Indicates the browser information of the used for signing-in.
     * @returns a string
     */
    public get browser() {
        return this._browser;
    };
    /**
     * Sets the browser property value. Indicates the browser information of the used for signing-in.
     * @param value Value to set for the browser property.
     */
    public set browser(value: string | undefined) {
        if(value) {
            this._browser = value;
        }
    };
    /**
     * Instantiates a new deviceDetail and sets the default values.
     * @param deviceDetailParameterValue 
     */
    public constructor(deviceDetailParameterValue?: DeviceDetail | undefined) {
        this._additionalData = deviceDetailParameterValue?.additionalData ? deviceDetailParameterValue?.additionalData! : {};
        this._browser = deviceDetailParameterValue?.browser;
        this._deviceId = deviceDetailParameterValue?.deviceId;
        this._displayName = deviceDetailParameterValue?.displayName;
        this._isCompliant = deviceDetailParameterValue?.isCompliant;
        this._isManaged = deviceDetailParameterValue?.isManaged;
        this._operatingSystem = deviceDetailParameterValue?.operatingSystem;
        this._trustType = deviceDetailParameterValue?.trustType;
    };
    /**
     * Gets the deviceId property value. Refers to the UniqueID of the device used for signing-in.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Refers to the UniqueID of the device used for signing-in.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        if(value) {
            this._deviceId = value;
        }
    };
    /**
     * Gets the displayName property value. Refers to the name of the device used for signing-in.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Refers to the name of the device used for signing-in.
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
            "browser": n => { this.browser = n.getStringValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isCompliant": n => { this.isCompliant = n.getBooleanValue(); },
            "isManaged": n => { this.isManaged = n.getBooleanValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "trustType": n => { this.trustType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isCompliant property value. Indicates whether the device is compliant or not.
     * @returns a boolean
     */
    public get isCompliant() {
        return this._isCompliant;
    };
    /**
     * Sets the isCompliant property value. Indicates whether the device is compliant or not.
     * @param value Value to set for the isCompliant property.
     */
    public set isCompliant(value: boolean | undefined) {
        if(value) {
            this._isCompliant = value;
        }
    };
    /**
     * Gets the isManaged property value. Indicates if the device is managed or not.
     * @returns a boolean
     */
    public get isManaged() {
        return this._isManaged;
    };
    /**
     * Sets the isManaged property value. Indicates if the device is managed or not.
     * @param value Value to set for the isManaged property.
     */
    public set isManaged(value: boolean | undefined) {
        if(value) {
            this._isManaged = value;
        }
    };
    /**
     * Gets the operatingSystem property value. Indicates the OS name and version used for signing-in.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. Indicates the OS name and version used for signing-in.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        if(value) {
            this._operatingSystem = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.browser){
            writer.writeStringValue("browser", this.browser);
        }
        if(this.deviceId){
            writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isCompliant){
            writer.writeBooleanValue("isCompliant", this.isCompliant);
        }
        if(this.isManaged){
            writer.writeBooleanValue("isManaged", this.isManaged);
        }
        if(this.operatingSystem){
            writer.writeStringValue("operatingSystem", this.operatingSystem);
        }
        if(this.trustType){
            writer.writeStringValue("trustType", this.trustType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the trustType property value. Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined.
     * @returns a string
     */
    public get trustType() {
        return this._trustType;
    };
    /**
     * Sets the trustType property value. Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined.
     * @param value Value to set for the trustType property.
     */
    public set trustType(value: string | undefined) {
        if(value) {
            this._trustType = value;
        }
    };
}
