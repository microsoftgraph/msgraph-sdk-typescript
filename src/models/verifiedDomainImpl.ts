import {VerifiedDomain} from './verifiedDomain';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VerifiedDomainImpl implements AdditionalDataHolder, Parsable, VerifiedDomain {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** For example, Email, OfficeCommunicationsOnline.  */
    capabilities?: string | undefined;
    /** true if this is the default domain associated with the tenant; otherwise, false.  */
    isDefault?: boolean | undefined;
    /** true if this is the initial domain associated with the tenant; otherwise, false.  */
    isInitial?: boolean | undefined;
    /** The domain name; for example, contoso.onmicrosoft.com.  */
    name?: string | undefined;
    /** For example, Managed.  */
    type?: string | undefined;
    /**
     * Instantiates a new verifiedDomain and sets the default values.
     * @param verifiedDomainParameterValue 
     */
    public constructor(verifiedDomainParameterValue?: VerifiedDomain | undefined) {
        this.additionalData = {};
        this.additionalData = verifiedDomainParameterValue?.additionalData ? {} : verifiedDomainParameterValue?.additionalData!
        this.capabilities = verifiedDomainParameterValue?.capabilities ;
        this.isDefault = verifiedDomainParameterValue?.isDefault ;
        this.isInitial = verifiedDomainParameterValue?.isInitial ;
        this.name = verifiedDomainParameterValue?.name ;
        this.type = verifiedDomainParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "capabilities": n => { this.capabilities = n.getStringValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isInitial": n => { this.isInitial = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.capabilities){
        if(this.capabilities)
        writer.writeStringValue("capabilities", this.capabilities);
        }
        if(this.isDefault){
        if(this.isDefault)
        writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.isInitial){
        if(this.isInitial)
        writer.writeBooleanValue("isInitial", this.isInitial);
        }
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.type){
        if(this.type)
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
