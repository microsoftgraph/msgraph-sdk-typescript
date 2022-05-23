import {SecurityVendorInformation} from './securityVendorInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityVendorInformationImpl implements AdditionalDataHolder, Parsable, SecurityVendorInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specific provider (product/service - not vendor company); for example, WindowsDefenderATP. */
    public provider?: string | undefined;
    /** Version of the provider or subprovider, if it exists, that generated the alert. Required */
    public providerVersion?: string | undefined;
    /** Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen. */
    public subProvider?: string | undefined;
    /** Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required */
    public vendor?: string | undefined;
    /**
     * Instantiates a new securityVendorInformation and sets the default values.
     * @param securityVendorInformationParameterValue 
     */
    public constructor(securityVendorInformationParameterValue?: SecurityVendorInformation | undefined) {
        this.additionalData = securityVendorInformationParameterValue?.additionalData ? securityVendorInformationParameterValue?.additionalData! : {}
        this.provider = securityVendorInformationParameterValue?.provider ;
        this.providerVersion = securityVendorInformationParameterValue?.providerVersion ;
        this.subProvider = securityVendorInformationParameterValue?.subProvider ;
        this.vendor = securityVendorInformationParameterValue?.vendor ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "provider": n => { this.provider = n.getStringValue(); },
            "providerVersion": n => { this.providerVersion = n.getStringValue(); },
            "subProvider": n => { this.subProvider = n.getStringValue(); },
            "vendor": n => { this.vendor = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.provider){
        writer.writeStringValue("provider", this.provider);
        }
        if(this.providerVersion){
        writer.writeStringValue("providerVersion", this.providerVersion);
        }
        if(this.subProvider){
        writer.writeStringValue("subProvider", this.subProvider);
        }
        if(this.vendor){
        writer.writeStringValue("vendor", this.vendor);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
