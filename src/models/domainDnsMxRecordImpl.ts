import {DomainDnsMxRecord} from './domainDnsMxRecord';
import {DomainDnsRecordImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsMxRecordImpl extends DomainDnsRecordImpl implements DomainDnsMxRecord {
    /** Value used when configuring the answer/destination/value of the MX record at the DNS host. */
    public mailExchange?: string | undefined;
    /** Value used when configuring the Preference/Priority property of the MX record at the DNS host. */
    public preference?: number | undefined;
    /**
     * Instantiates a new DomainDnsMxRecord and sets the default values.
     * @param domainDnsMxRecordParameterValue 
     */
    public constructor(domainDnsMxRecordParameterValue?: DomainDnsMxRecord | undefined) {
        super(domainDnsMxRecordParameterValue);
        this.mailExchange = domainDnsMxRecordParameterValue?.mailExchange;
        this.preference = domainDnsMxRecordParameterValue?.preference;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "mailExchange": n => { this.mailExchange = n.getStringValue(); },
            "preference": n => { this.preference = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.mailExchange){
            writer.writeStringValue("mailExchange", this.mailExchange);
        }
        if(this.preference){
            writer.writeNumberValue("preference", this.preference);
        }
    };
}
