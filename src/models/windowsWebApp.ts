import {MobileApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsWebApp extends MobileApp implements Parsable {
    /** Indicates the Windows web app URL. Example: "https://www.contoso.com" */
    private _appUrl?: string | undefined;
    /**
     * Gets the appUrl property value. Indicates the Windows web app URL. Example: "https://www.contoso.com"
     * @returns a string
     */
    public get appUrl() {
        return this._appUrl;
    };
    /**
     * Sets the appUrl property value. Indicates the Windows web app URL. Example: "https://www.contoso.com"
     * @param value Value to set for the appUrl property.
     */
    public set appUrl(value: string | undefined) {
        this._appUrl = value;
    };
    /**
     * Instantiates a new WindowsWebApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsWebApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appUrl": n => { this.appUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appUrl", this.appUrl);
    };
}
