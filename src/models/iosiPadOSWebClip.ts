import {MobileApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosiPadOSWebClip extends MobileApp implements Parsable {
    /** Indicates iOS/iPadOS web clip app URL. Example: 'https://www.contoso.com' */
    private _appUrl?: string | undefined;
    /** Whether or not to use managed browser. When TRUE, the app will be required to be opened in Microsoft Edge. When FALSE, the app will not be required to be opened in Microsoft Edge. By default, this property is set to FALSE. */
    private _useManagedBrowser?: boolean | undefined;
    /**
     * Gets the appUrl property value. Indicates iOS/iPadOS web clip app URL. Example: 'https://www.contoso.com'
     * @returns a string
     */
    public get appUrl() {
        return this._appUrl;
    };
    /**
     * Sets the appUrl property value. Indicates iOS/iPadOS web clip app URL. Example: 'https://www.contoso.com'
     * @param value Value to set for the appUrl property.
     */
    public set appUrl(value: string | undefined) {
        this._appUrl = value;
    };
    /**
     * Instantiates a new IosiPadOSWebClip and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosiPadOSWebClip";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appUrl": n => { this.appUrl = n.getStringValue(); },
            "useManagedBrowser": n => { this.useManagedBrowser = n.getBooleanValue(); },
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
        writer.writeBooleanValue("useManagedBrowser", this.useManagedBrowser);
    };
    /**
     * Gets the useManagedBrowser property value. Whether or not to use managed browser. When TRUE, the app will be required to be opened in Microsoft Edge. When FALSE, the app will not be required to be opened in Microsoft Edge. By default, this property is set to FALSE.
     * @returns a boolean
     */
    public get useManagedBrowser() {
        return this._useManagedBrowser;
    };
    /**
     * Sets the useManagedBrowser property value. Whether or not to use managed browser. When TRUE, the app will be required to be opened in Microsoft Edge. When FALSE, the app will not be required to be opened in Microsoft Edge. By default, this property is set to FALSE.
     * @param value Value to set for the useManagedBrowser property.
     */
    public set useManagedBrowser(value: boolean | undefined) {
        this._useManagedBrowser = value;
    };
}
