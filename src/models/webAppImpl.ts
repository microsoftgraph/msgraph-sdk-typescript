import {MobileAppImpl} from './index';
import {WebApp} from './webApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebAppImpl extends MobileAppImpl implements WebApp {
    /** The web app URL. This property cannot be PATCHed. */
    private _appUrl?: string | undefined;
    /** Whether or not to use managed browser. This property is only applicable for Android and IOS. */
    private _useManagedBrowser?: boolean | undefined;
    /**
     * Gets the appUrl property value. The web app URL. This property cannot be PATCHed.
     * @returns a string
     */
    public get appUrl() {
        return this._appUrl;
    };
    /**
     * Sets the appUrl property value. The web app URL. This property cannot be PATCHed.
     * @param value Value to set for the appUrl property.
     */
    public set appUrl(value: string | undefined) {
        if(value) {
            this._appUrl = value;
        }
    };
    /**
     * Instantiates a new WebApp and sets the default values.
     * @param webAppParameterValue 
     */
    public constructor(webAppParameterValue?: WebApp | undefined) {
        super(webAppParameterValue);
        this._appUrl = webAppParameterValue?.appUrl;
        this._useManagedBrowser = webAppParameterValue?.useManagedBrowser;
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
        if(this.appUrl){
            writer.writeStringValue("appUrl", this.appUrl);
        }
        if(this.useManagedBrowser){
            writer.writeBooleanValue("useManagedBrowser", this.useManagedBrowser);
        }
    };
    /**
     * Gets the useManagedBrowser property value. Whether or not to use managed browser. This property is only applicable for Android and IOS.
     * @returns a boolean
     */
    public get useManagedBrowser() {
        return this._useManagedBrowser;
    };
    /**
     * Sets the useManagedBrowser property value. Whether or not to use managed browser. This property is only applicable for Android and IOS.
     * @param value Value to set for the useManagedBrowser property.
     */
    public set useManagedBrowser(value: boolean | undefined) {
        if(value) {
            this._useManagedBrowser = value;
        }
    };
}
