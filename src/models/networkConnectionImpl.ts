import {ConnectionDirection} from './connectionDirection';
import {ConnectionStatus} from './connectionStatus';
import {NetworkConnection} from './networkConnection';
import {SecurityNetworkProtocol} from './securityNetworkProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NetworkConnectionImpl implements AdditionalDataHolder, NetworkConnection, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the application managing the network connection (for example, Facebook, SMTP, etc.). */
    public applicationName?: string | undefined;
    /** Destination IP address (of the network connection). */
    public destinationAddress?: string | undefined;
    /** Destination domain portion of the destination URL. (for example 'www.contoso.com'). */
    public destinationDomain?: string | undefined;
    /** Location (by IP address mapping) associated with the destination of a network connection. */
    public destinationLocation?: string | undefined;
    /** Destination port (of the network connection). */
    public destinationPort?: string | undefined;
    /** Network connection URL/URI string - excluding parameters. (for example 'www.contoso.com/products/default.html') */
    public destinationUrl?: string | undefined;
    /** Network connection direction. Possible values are: unknown, inbound, outbound. */
    public direction?: ConnectionDirection | undefined;
    /** Date when the destination domain was registered. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public domainRegisteredDateTime?: Date | undefined;
    /** The local DNS name resolution as it appears in the host's local DNS cache (for example, in case the 'hosts' file was tampered with). */
    public localDnsName?: string | undefined;
    /** Network Address Translation destination IP address. */
    public natDestinationAddress?: string | undefined;
    /** Network Address Translation destination port. */
    public natDestinationPort?: string | undefined;
    /** Network Address Translation source IP address. */
    public natSourceAddress?: string | undefined;
    /** Network Address Translation source port. */
    public natSourcePort?: string | undefined;
    /** Network protocol. Possible values are: unknown, ip, icmp, igmp, ggp, ipv4, tcp, pup, udp, idp, ipv6, ipv6RoutingHeader, ipv6FragmentHeader, ipSecEncapsulatingSecurityPayload, ipSecAuthenticationHeader, icmpV6, ipv6NoNextHeader, ipv6DestinationOptions, nd, raw, ipx, spx, spxII. */
    public protocol?: SecurityNetworkProtocol | undefined;
    /** Provider generated/calculated risk score of the network connection. Recommended value range of 0-1, which equates to a percentage. */
    public riskScore?: string | undefined;
    /** Source (i.e. origin) IP address (of the network connection). */
    public sourceAddress?: string | undefined;
    /** Location (by IP address mapping) associated with the source of a network connection. */
    public sourceLocation?: string | undefined;
    /** Source (i.e. origin) IP port (of the network connection). */
    public sourcePort?: string | undefined;
    /** Network connection status. Possible values are: unknown, attempted, succeeded, blocked, failed. */
    public status?: ConnectionStatus | undefined;
    /** Parameters (suffix) of the destination URL. */
    public urlParameters?: string | undefined;
    /**
     * Instantiates a new networkConnection and sets the default values.
     * @param networkConnectionParameterValue 
     */
    public constructor(networkConnectionParameterValue?: NetworkConnection | undefined) {
        this.additionalData = networkConnectionParameterValue?.additionalData ? networkConnectionParameterValue?.additionalData! : {}
        this.applicationName = networkConnectionParameterValue?.applicationName ;
        this.destinationAddress = networkConnectionParameterValue?.destinationAddress ;
        this.destinationDomain = networkConnectionParameterValue?.destinationDomain ;
        this.destinationLocation = networkConnectionParameterValue?.destinationLocation ;
        this.destinationPort = networkConnectionParameterValue?.destinationPort ;
        this.destinationUrl = networkConnectionParameterValue?.destinationUrl ;
        this.direction = networkConnectionParameterValue?.direction ;
        this.domainRegisteredDateTime = networkConnectionParameterValue?.domainRegisteredDateTime ;
        this.localDnsName = networkConnectionParameterValue?.localDnsName ;
        this.natDestinationAddress = networkConnectionParameterValue?.natDestinationAddress ;
        this.natDestinationPort = networkConnectionParameterValue?.natDestinationPort ;
        this.natSourceAddress = networkConnectionParameterValue?.natSourceAddress ;
        this.natSourcePort = networkConnectionParameterValue?.natSourcePort ;
        this.protocol = networkConnectionParameterValue?.protocol ;
        this.riskScore = networkConnectionParameterValue?.riskScore ;
        this.sourceAddress = networkConnectionParameterValue?.sourceAddress ;
        this.sourceLocation = networkConnectionParameterValue?.sourceLocation ;
        this.sourcePort = networkConnectionParameterValue?.sourcePort ;
        this.status = networkConnectionParameterValue?.status ;
        this.urlParameters = networkConnectionParameterValue?.urlParameters ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applicationName": n => { this.applicationName = n.getStringValue(); },
            "destinationAddress": n => { this.destinationAddress = n.getStringValue(); },
            "destinationDomain": n => { this.destinationDomain = n.getStringValue(); },
            "destinationLocation": n => { this.destinationLocation = n.getStringValue(); },
            "destinationPort": n => { this.destinationPort = n.getStringValue(); },
            "destinationUrl": n => { this.destinationUrl = n.getStringValue(); },
            "direction": n => { this.direction = n.getEnumValue<ConnectionDirection>(ConnectionDirection); },
            "domainRegisteredDateTime": n => { this.domainRegisteredDateTime = n.getDateValue(); },
            "localDnsName": n => { this.localDnsName = n.getStringValue(); },
            "natDestinationAddress": n => { this.natDestinationAddress = n.getStringValue(); },
            "natDestinationPort": n => { this.natDestinationPort = n.getStringValue(); },
            "natSourceAddress": n => { this.natSourceAddress = n.getStringValue(); },
            "natSourcePort": n => { this.natSourcePort = n.getStringValue(); },
            "protocol": n => { this.protocol = n.getEnumValue<SecurityNetworkProtocol>(SecurityNetworkProtocol); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
            "sourceAddress": n => { this.sourceAddress = n.getStringValue(); },
            "sourceLocation": n => { this.sourceLocation = n.getStringValue(); },
            "sourcePort": n => { this.sourcePort = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<ConnectionStatus>(ConnectionStatus); },
            "urlParameters": n => { this.urlParameters = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.applicationName){
        writer.writeStringValue("applicationName", this.applicationName);
        }
        if(this.destinationAddress){
        writer.writeStringValue("destinationAddress", this.destinationAddress);
        }
        if(this.destinationDomain){
        writer.writeStringValue("destinationDomain", this.destinationDomain);
        }
        if(this.destinationLocation){
        writer.writeStringValue("destinationLocation", this.destinationLocation);
        }
        if(this.destinationPort){
        writer.writeStringValue("destinationPort", this.destinationPort);
        }
        if(this.destinationUrl){
        writer.writeStringValue("destinationUrl", this.destinationUrl);
        }
        if(this.direction){
        writer.writeEnumValue<ConnectionDirection>("direction", this.direction);
        }
        if(this.domainRegisteredDateTime){
        writer.writeDateValue("domainRegisteredDateTime", this.domainRegisteredDateTime);
        }
        if(this.localDnsName){
        writer.writeStringValue("localDnsName", this.localDnsName);
        }
        if(this.natDestinationAddress){
        writer.writeStringValue("natDestinationAddress", this.natDestinationAddress);
        }
        if(this.natDestinationPort){
        writer.writeStringValue("natDestinationPort", this.natDestinationPort);
        }
        if(this.natSourceAddress){
        writer.writeStringValue("natSourceAddress", this.natSourceAddress);
        }
        if(this.natSourcePort){
        writer.writeStringValue("natSourcePort", this.natSourcePort);
        }
        if(this.protocol){
        writer.writeEnumValue<SecurityNetworkProtocol>("protocol", this.protocol);
        }
        if(this.riskScore){
        writer.writeStringValue("riskScore", this.riskScore);
        }
        if(this.sourceAddress){
        writer.writeStringValue("sourceAddress", this.sourceAddress);
        }
        if(this.sourceLocation){
        writer.writeStringValue("sourceLocation", this.sourceLocation);
        }
        if(this.sourcePort){
        writer.writeStringValue("sourcePort", this.sourcePort);
        }
        if(this.status){
        writer.writeEnumValue<ConnectionStatus>("status", this.status);
        }
        if(this.urlParameters){
        writer.writeStringValue("urlParameters", this.urlParameters);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
