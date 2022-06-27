import {DomainDnsSrvRecord} from './domainDnsSrvRecord';
import {DomainDnsRecordImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsSrvRecordImpl extends DomainDnsRecordImpl implements DomainDnsSrvRecord {
    /** Value to use when configuring the Target property of the SRV record at the DNS host. */
    public nameTarget?: string | undefined;
    /** Value to use when configuring the port property of the SRV record at the DNS host. */
    public port?: number | undefined;
    /** Value to use when configuring the priority property of the SRV record at the DNS host. */
    public priority?: number | undefined;
    /** Value to use when configuring the protocol property of the SRV record at the DNS host. */
    public protocol?: string | undefined;
    /** Value to use when configuring the service property of the SRV record at the DNS host. */
    public service?: string | undefined;
    /** Value to use when configuring the weight property of the SRV record at the DNS host. */
    public weight?: number | undefined;
    /**
     * Instantiates a new DomainDnsSrvRecord and sets the default values.
     * @param domainDnsSrvRecordParameterValue 
     */
    public constructor(domainDnsSrvRecordParameterValue?: DomainDnsSrvRecord | undefined) {
        super(domainDnsSrvRecordParameterValue);
        this.nameTarget = domainDnsSrvRecordParameterValue?.nameTarget;
        this.port = domainDnsSrvRecordParameterValue?.port;
        this.priority = domainDnsSrvRecordParameterValue?.priority;
        this.protocol = domainDnsSrvRecordParameterValue?.protocol;
        this.service = domainDnsSrvRecordParameterValue?.service;
        this.weight = domainDnsSrvRecordParameterValue?.weight;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "nameTarget": n => { this.nameTarget = n.getStringValue(); },
            "port": n => { this.port = n.getNumberValue(); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "protocol": n => { this.protocol = n.getStringValue(); },
            "service": n => { this.service = n.getStringValue(); },
            "weight": n => { this.weight = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.nameTarget){
            writer.writeStringValue("nameTarget", this.nameTarget);
        }
        if(this.port){
            writer.writeNumberValue("port", this.port);
        }
        if(this.priority){
            writer.writeNumberValue("priority", this.priority);
        }
        if(this.protocol){
            writer.writeStringValue("protocol", this.protocol);
        }
        if(this.service){
            writer.writeStringValue("service", this.service);
        }
        if(this.weight){
            writer.writeNumberValue("weight", this.weight);
        }
    };
}
