import {DomainDnsRecord} from './domainDnsRecord';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of domain entities. */
export class DomainDnsRecordImpl extends EntityImpl implements DomainDnsRecord, Parsable {
    /** If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain. */
    public isOptional?: boolean | undefined;
    /** Value used when configuring the name of the DNS record at the DNS host. */
    public label?: string | undefined;
    /** Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, Txt. */
    public recordType?: string | undefined;
    /** Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. */
    public supportedService?: string | undefined;
    /** Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable. */
    public ttl?: number | undefined;
    /**
     * Instantiates a new domainDnsRecord and sets the default values.
     * @param domainDnsRecordParameterValue 
     */
    public constructor(domainDnsRecordParameterValue?: DomainDnsRecord | undefined) {
        super();
        this.isOptional = domainDnsRecordParameterValue?.isOptional ;
        this.label = domainDnsRecordParameterValue?.label ;
        this.recordType = domainDnsRecordParameterValue?.recordType ;
        this.supportedService = domainDnsRecordParameterValue?.supportedService ;
        this.ttl = domainDnsRecordParameterValue?.ttl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isOptional": n => { this.isOptional = n.getBooleanValue(); },
            "label": n => { this.label = n.getStringValue(); },
            "recordType": n => { this.recordType = n.getStringValue(); },
            "supportedService": n => { this.supportedService = n.getStringValue(); },
            "ttl": n => { this.ttl = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isOptional){
        writer.writeBooleanValue("isOptional", this.isOptional);
        }
        if(this.label){
        writer.writeStringValue("label", this.label);
        }
        if(this.recordType){
        writer.writeStringValue("recordType", this.recordType);
        }
        if(this.supportedService){
        writer.writeStringValue("supportedService", this.supportedService);
        }
        if(this.ttl){
        writer.writeNumberValue("ttl", this.ttl);
        }
    };
}
