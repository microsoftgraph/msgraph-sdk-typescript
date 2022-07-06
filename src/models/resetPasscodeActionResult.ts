import {DeviceActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResetPasscodeActionResult extends DeviceActionResult implements Parsable {
    /** Newly generated passcode for the device */
    private _passcode?: string | undefined;
    /**
     * Instantiates a new ResetPasscodeActionResult and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "passcode": n => { this.passcode = n.getStringValue(); },
        };
    };
    /**
     * Gets the passcode property value. Newly generated passcode for the device
     * @returns a string
     */
    public get passcode() {
        return this._passcode;
    };
    /**
     * Sets the passcode property value. Newly generated passcode for the device
     * @param value Value to set for the passcode property.
     */
    public set passcode(value: string | undefined) {
        this._passcode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("passcode", this.passcode);
    };
}
