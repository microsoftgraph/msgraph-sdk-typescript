import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** App for Windows information protection  */
export class WindowsInformationProtectionAppImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** If true, app is denied protection or exemption.  */
    denied?: boolean | undefined;
    /** The app's description.  */
    description?: string | undefined;
    /** App display name.  */
    displayName?: string | undefined;
    /** The product name.  */
    productName?: string | undefined;
    /** The publisher name  */
    publisherName?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionApp and sets the default values.
     * @param windowsInformationProtectionAppParameterValue 
     */
    public constructor(windowsInformationProtectionAppParameterValue?: WindowsInformationProtectionApp | undefined) {
        this.additionalData = {};
        this.additionalData = windowsInformationProtectionAppParameterValue?.additionalData ? {} : windowsInformationProtectionAppParameterValue?.additionalData!
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
        if(this.denied)
        writer.writeBooleanValue("denied", this.denied);
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.productName){
        if(this.productName)
        writer.writeStringValue("productName", this.productName);
        }
        if(this.publisherName){
        if(this.publisherName)
        writer.writeStringValue("publisherName", this.publisherName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
