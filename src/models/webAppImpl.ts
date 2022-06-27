import {MobileAppImpl} from './index';
import {WebApp} from './webApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebAppImpl extends MobileAppImpl implements WebApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The web app URL. This property cannot be PATCHed. */
    public appUrl?: string | undefined;
    /** Whether or not to use managed browser. This property is only applicable for Android and IOS. */
    public useManagedBrowser?: boolean | undefined;
    /**
     * Instantiates a new WebApp and sets the default values.
     * @param webAppParameterValue 
     */
    public constructor(webAppParameterValue?: WebApp | undefined) {
        super(webAppParameterValue);
        this.additionalData = webAppParameterValue?.additionalData ? webAppParameterValue?.additionalData! : {};
        this.appUrl = webAppParameterValue?.appUrl;
        this.useManagedBrowser = webAppParameterValue?.useManagedBrowser;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
