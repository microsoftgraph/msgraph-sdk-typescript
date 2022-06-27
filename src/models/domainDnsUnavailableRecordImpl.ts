import {DomainDnsUnavailableRecord} from './domainDnsUnavailableRecord';
import {DomainDnsRecordImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsUnavailableRecordImpl extends DomainDnsRecordImpl implements DomainDnsUnavailableRecord {
    /** Provides the reason why the DomainDnsUnavailableRecord entity is returned. */
    public description?: string | undefined;
    /**
     * Instantiates a new DomainDnsUnavailableRecord and sets the default values.
     * @param domainDnsUnavailableRecordParameterValue 
     */
    public constructor(domainDnsUnavailableRecordParameterValue?: DomainDnsUnavailableRecord | undefined) {
        super(domainDnsUnavailableRecordParameterValue);
        this.description = domainDnsUnavailableRecordParameterValue?.description;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
    };
}
