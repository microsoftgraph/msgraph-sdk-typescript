import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** App for Windows information protection */
export class WindowsInformationProtectionAppImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If true, app is denied protection or exemption. */
    public denied?: boolean | undefined;
    /** The app's description. */
    public description?: string | undefined;
    /** App display name. */
    public displayName?: string | undefined;
    /** The product name. */
    public productName?: string | undefined;
    /** The publisher name */
    public publisherName?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionApp and sets the default values.
     * @param windowsInformationProtectionAppParameterValue 
     */
    public constructor(windowsInformationProtectionAppParameterValue?: WindowsInformationProtectionApp | undefined) {
        this.additionalData = windowsInformationProtectionAppParameterValue?.additionalData ? windowsInformationProtectionAppParameterValue?.additionalData! : {}
        this.denied = windowsInformationProtectionAppParameterValue?.denied ;
        this.description = windowsInformationProtectionAppParameterValue?.description ;
        this.displayName = windowsInformationProtectionAppParameterValue?.displayName ;
        this.productName = windowsInformationProtectionAppParameterValue?.productName ;
        this.publisherName = windowsInformationProtectionAppParameterValue?.publisherName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "denied": n => { this.denied = n.getBooleanValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "productName": n => { this.productName = n.getStringValue(); },
            "publisherName": n => { this.publisherName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.denied){
        writer.writeBooleanValue("denied", this.denied);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.productName){
        writer.writeStringValue("productName", this.productName);
        }
        if(this.publisherName){
        writer.writeStringValue("publisherName", this.publisherName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
