import {DomainDnsCnameRecord} from './domainDnsCnameRecord';
import {DomainDnsRecordImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsCnameRecordImpl extends DomainDnsRecordImpl implements DomainDnsCnameRecord {
    /** The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host. */
    public canonicalName?: string | undefined;
    /**
     * Instantiates a new DomainDnsCnameRecord and sets the default values.
     * @param domainDnsCnameRecordParameterValue 
     */
    public constructor(domainDnsCnameRecordParameterValue?: DomainDnsCnameRecord | undefined) {
        super(domainDnsCnameRecordParameterValue);
        this.canonicalName = domainDnsCnameRecordParameterValue?.canonicalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "canonicalName": n => { this.canonicalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.canonicalName){
            writer.writeStringValue("canonicalName", this.canonicalName);
        }
    };
}
