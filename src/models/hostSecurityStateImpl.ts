import {HostSecurityState} from './hostSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HostSecurityStateImpl implements AdditionalDataHolder, HostSecurityState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com). */
    public fqdn?: string | undefined;
    /** The isAzureAdJoined property */
    public isAzureAdJoined?: boolean | undefined;
    /** The isAzureAdRegistered property */
    public isAzureAdRegistered?: boolean | undefined;
    /** True if the host is domain joined to an on-premises Active Directory domain. */
    public isHybridAzureDomainJoined?: boolean | undefined;
    /** The local host name, without the DNS domain name. */
    public netBiosName?: string | undefined;
    /** Host Operating System. (For example, Windows10, MacOS, RHEL, etc.). */
    public os?: string | undefined;
    /** Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert. */
    public privateIpAddress?: string | undefined;
    /** Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert. */
    public publicIpAddress?: string | undefined;
    /** Provider-generated/calculated risk score of the host.  Recommended value range of 0-1, which equates to a percentage. */
    public riskScore?: string | undefined;
    /**
     * Instantiates a new hostSecurityState and sets the default values.
     * @param hostSecurityStateParameterValue 
     */
    public constructor(hostSecurityStateParameterValue?: HostSecurityState | undefined) {
        this.additionalData = hostSecurityStateParameterValue?.additionalData ? hostSecurityStateParameterValue?.additionalData! : {}
        this.fqdn = hostSecurityStateParameterValue?.fqdn ;
        this.isAzureAdJoined = hostSecurityStateParameterValue?.isAzureAdJoined ;
        this.isAzureAdRegistered = hostSecurityStateParameterValue?.isAzureAdRegistered ;
        this.isHybridAzureDomainJoined = hostSecurityStateParameterValue?.isHybridAzureDomainJoined ;
        this.netBiosName = hostSecurityStateParameterValue?.netBiosName ;
        this.os = hostSecurityStateParameterValue?.os ;
        this.privateIpAddress = hostSecurityStateParameterValue?.privateIpAddress ;
        this.publicIpAddress = hostSecurityStateParameterValue?.publicIpAddress ;
        this.riskScore = hostSecurityStateParameterValue?.riskScore ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fqdn": n => { this.fqdn = n.getStringValue(); },
            "isAzureAdJoined": n => { this.isAzureAdJoined = n.getBooleanValue(); },
            "isAzureAdRegistered": n => { this.isAzureAdRegistered = n.getBooleanValue(); },
            "isHybridAzureDomainJoined": n => { this.isHybridAzureDomainJoined = n.getBooleanValue(); },
            "netBiosName": n => { this.netBiosName = n.getStringValue(); },
            "os": n => { this.os = n.getStringValue(); },
            "privateIpAddress": n => { this.privateIpAddress = n.getStringValue(); },
            "publicIpAddress": n => { this.publicIpAddress = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.fqdn){
        writer.writeStringValue("fqdn", this.fqdn);
        }
        if(this.isAzureAdJoined){
        writer.writeBooleanValue("isAzureAdJoined", this.isAzureAdJoined);
        }
        if(this.isAzureAdRegistered){
        writer.writeBooleanValue("isAzureAdRegistered", this.isAzureAdRegistered);
        }
        if(this.isHybridAzureDomainJoined){
        writer.writeBooleanValue("isHybridAzureDomainJoined", this.isHybridAzureDomainJoined);
        }
        if(this.netBiosName){
        writer.writeStringValue("netBiosName", this.netBiosName);
        }
        if(this.os){
        writer.writeStringValue("os", this.os);
        }
        if(this.privateIpAddress){
        writer.writeStringValue("privateIpAddress", this.privateIpAddress);
        }
        if(this.publicIpAddress){
        writer.writeStringValue("publicIpAddress", this.publicIpAddress);
        }
        if(this.riskScore){
        writer.writeStringValue("riskScore", this.riskScore);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
