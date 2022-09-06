import {DeviceActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RemoteLockActionResult extends DeviceActionResult implements Parsable {
    /** Pin to unlock the client */
    private _unlockPin?: string | undefined;
    /**
     * Instantiates a new RemoteLockActionResult and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.remoteLockActionResult";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "unlockPin": n => { this.unlockPin = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("unlockPin", this.unlockPin);
    };
    /**
     * Gets the unlockPin property value. Pin to unlock the client
     * @returns a string
     */
    public get unlockPin() {
        return this._unlockPin;
    };
    /**
     * Sets the unlockPin property value. Pin to unlock the client
     * @param value Value to set for the unlockPin property.
     */
    public set unlockPin(value: string | undefined) {
        this._unlockPin = value;
    };
}
