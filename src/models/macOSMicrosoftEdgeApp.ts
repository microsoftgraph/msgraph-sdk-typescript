import {MobileApp} from './index';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSMicrosoftEdgeApp extends MobileApp implements Parsable {
    /** The enum to specify the channels for Microsoft Edge apps. */
    private _channel?: MicrosoftEdgeChannel | undefined;
    /**
     * Gets the channel property value. The enum to specify the channels for Microsoft Edge apps.
     * @returns a microsoftEdgeChannel
     */
    public get channel() {
        return this._channel;
    };
    /**
     * Sets the channel property value. The enum to specify the channels for Microsoft Edge apps.
     * @param value Value to set for the channel property.
     */
    public set channel(value: MicrosoftEdgeChannel | undefined) {
        this._channel = value;
    };
    /**
     * Instantiates a new MacOSMicrosoftEdgeApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.macOSMicrosoftEdgeApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "channel": n => { this.channel = n.getEnumValue<MicrosoftEdgeChannel>(MicrosoftEdgeChannel); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<MicrosoftEdgeChannel>("channel", this.channel);
    };
}
