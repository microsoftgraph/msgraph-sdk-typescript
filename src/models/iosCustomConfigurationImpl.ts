import {DeviceConfigurationImpl} from './index';
import {IosCustomConfiguration} from './iosCustomConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosCustomConfigurationImpl extends DeviceConfigurationImpl implements IosCustomConfiguration {
    /** Payload. (UTF8 encoded byte array) */
    private _payload?: string | undefined;
    /** Payload file name (.mobileconfig */
    private _payloadFileName?: string | undefined;
    /** Name that is displayed to the user. */
    private _payloadName?: string | undefined;
    /**
     * Instantiates a new IosCustomConfiguration and sets the default values.
     * @param iosCustomConfigurationParameterValue 
     */
    public constructor(iosCustomConfigurationParameterValue?: IosCustomConfiguration | undefined) {
        super(iosCustomConfigurationParameterValue);
        this._payload = iosCustomConfigurationParameterValue?.payload;
        this._payloadFileName = iosCustomConfigurationParameterValue?.payloadFileName;
        this._payloadName = iosCustomConfigurationParameterValue?.payloadName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "payload": n => { this.payload = n.getStringValue(); },
            "payloadFileName": n => { this.payloadFileName = n.getStringValue(); },
            "payloadName": n => { this.payloadName = n.getStringValue(); },
        };
    };
    /**
     * Gets the payload property value. Payload. (UTF8 encoded byte array)
     * @returns a binary
     */
    public get payload() {
        return this._payload;
    };
    /**
     * Sets the payload property value. Payload. (UTF8 encoded byte array)
     * @param value Value to set for the payload property.
     */
    public set payload(value: string | undefined) {
        if(value) {
            this._payload = value;
        }
    };
    /**
     * Gets the payloadFileName property value. Payload file name (.mobileconfig
     * @returns a string
     */
    public get payloadFileName() {
        return this._payloadFileName;
    };
    /**
     * Sets the payloadFileName property value. Payload file name (.mobileconfig
     * @param value Value to set for the payloadFileName property.
     */
    public set payloadFileName(value: string | undefined) {
        if(value) {
            this._payloadFileName = value;
        }
    };
    /**
     * Gets the payloadName property value. Name that is displayed to the user.
     * @returns a string
     */
    public get payloadName() {
        return this._payloadName;
    };
    /**
     * Sets the payloadName property value. Name that is displayed to the user.
     * @param value Value to set for the payloadName property.
     */
    public set payloadName(value: string | undefined) {
        if(value) {
            this._payloadName = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.payload){
            writer.writeStringValue("payload", this.payload);
        }
        if(this.payloadFileName){
            writer.writeStringValue("payloadFileName", this.payloadFileName);
        }
        if(this.payloadName){
            writer.writeStringValue("payloadName", this.payloadName);
        }
    };
}
