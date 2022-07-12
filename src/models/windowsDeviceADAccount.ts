import {WindowsDeviceAccount} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDeviceADAccount extends WindowsDeviceAccount implements Parsable {
    /** Not yet documented */
    private _domainName?: string | undefined;
    /** Not yet documented */
    private _userName?: string | undefined;
    /**
     * Instantiates a new WindowsDeviceADAccount and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the domainName property value. Not yet documented
     * @returns a string
     */
    public get domainName() {
        return this._domainName;
    };
    /**
     * Sets the domainName property value. Not yet documented
     * @param value Value to set for the domainName property.
     */
    public set domainName(value: string | undefined) {
        this._domainName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "domainName": n => { this.domainName = n.getStringValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("domainName", this.domainName);
        writer.writeStringValue("userName", this.userName);
    };
    /**
     * Gets the userName property value. Not yet documented
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. Not yet documented
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
}
