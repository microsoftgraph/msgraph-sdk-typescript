import {ProxiedDomain} from './proxiedDomain';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Proxied Domain */
export class ProxiedDomainImpl implements AdditionalDataHolder, Parsable, ProxiedDomain {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The IP address or FQDN */
    public ipAddressOrFQDN?: string | undefined;
    /** Proxy IP or FQDN */
    public proxy?: string | undefined;
    /**
     * Instantiates a new proxiedDomain and sets the default values.
     * @param proxiedDomainParameterValue 
     */
    public constructor(proxiedDomainParameterValue?: ProxiedDomain | undefined) {
        this.additionalData = proxiedDomainParameterValue?.additionalData ? proxiedDomainParameterValue?.additionalData! : {}
        this.ipAddressOrFQDN = proxiedDomainParameterValue?.ipAddressOrFQDN ;
        this.proxy = proxiedDomainParameterValue?.proxy ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ipAddressOrFQDN": n => { this.ipAddressOrFQDN = n.getStringValue(); },
            "proxy": n => { this.proxy = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ipAddressOrFQDN){
        writer.writeStringValue("ipAddressOrFQDN", this.ipAddressOrFQDN);
        }
        if(this.proxy){
        writer.writeStringValue("proxy", this.proxy);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
