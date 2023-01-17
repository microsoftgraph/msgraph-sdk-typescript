import {MobileApp} from './index';
import {MicrosoftEdgeChannel} from './microsoftEdgeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsMicrosoftEdgeApp extends MobileApp implements Parsable {
    /** The enum to specify the channels for Microsoft Edge apps. */
    private _channel?: MicrosoftEdgeChannel | undefined;
    /** The language locale to use when the Edge app displays text to the user. */
    private _displayLanguageLocale?: string | undefined;
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
     * Instantiates a new WindowsMicrosoftEdgeApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsMicrosoftEdgeApp";
    };
    /**
     * Gets the displayLanguageLocale property value. The language locale to use when the Edge app displays text to the user.
     * @returns a string
     */
    public get displayLanguageLocale() {
        return this._displayLanguageLocale;
    };
    /**
     * Sets the displayLanguageLocale property value. The language locale to use when the Edge app displays text to the user.
     * @param value Value to set for the displayLanguageLocale property.
     */
    public set displayLanguageLocale(value: string | undefined) {
        this._displayLanguageLocale = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "channel": n => { this.channel = n.getEnumValue<MicrosoftEdgeChannel>(MicrosoftEdgeChannel); },
            "displayLanguageLocale": n => { this.displayLanguageLocale = n.getStringValue(); },
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
        writer.writeStringValue("displayLanguageLocale", this.displayLanguageLocale);
    };
}
