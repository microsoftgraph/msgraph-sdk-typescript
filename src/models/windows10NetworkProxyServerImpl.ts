import {Windows10NetworkProxyServer} from './windows10NetworkProxyServer';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Network Proxy Server Policy. */
export class Windows10NetworkProxyServerImpl implements Windows10NetworkProxyServer {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Address to the proxy server. Specify an address in the format <server>[':'<port>] */
    public address?: string | undefined;
    /** Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with what is specified in this node. */
    public exceptions?: string[] | undefined;
    /** Specifies whether the proxy server should be used for local (intranet) addresses. */
    public useForLocalAddresses?: boolean | undefined;
    /**
     * Instantiates a new windows10NetworkProxyServer and sets the default values.
     * @param windows10NetworkProxyServerParameterValue 
     */
    public constructor(windows10NetworkProxyServerParameterValue?: Windows10NetworkProxyServer | undefined) {
        this.additionalData = windows10NetworkProxyServerParameterValue?.additionalData ? windows10NetworkProxyServerParameterValue?.additionalData! : {};
        this.address = windows10NetworkProxyServerParameterValue?.address;
        this.exceptions = windows10NetworkProxyServerParameterValue?.exceptions;
        this.useForLocalAddresses = windows10NetworkProxyServerParameterValue?.useForLocalAddresses;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "exceptions": n => { this.exceptions = n.getCollectionOfPrimitiveValues<string>(); },
            "useForLocalAddresses": n => { this.useForLocalAddresses = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.address){
            writer.writeStringValue("address", this.address);
        }
        if(this.exceptions){
            writer.writeCollectionOfPrimitiveValues<string>("exceptions", this.exceptions);
        }
        if(this.useForLocalAddresses){
            writer.writeBooleanValue("useForLocalAddresses", this.useForLocalAddresses);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
