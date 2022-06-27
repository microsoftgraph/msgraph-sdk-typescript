import {DomainDnsTxtRecord} from './domainDnsTxtRecord';
import {DomainDnsRecordImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsTxtRecordImpl extends DomainDnsRecordImpl implements DomainDnsTxtRecord {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Value used when configuring the text property at the DNS host. */
    public text?: string | undefined;
    /**
     * Instantiates a new DomainDnsTxtRecord and sets the default values.
     * @param domainDnsTxtRecordParameterValue 
     */
    public constructor(domainDnsTxtRecordParameterValue?: DomainDnsTxtRecord | undefined) {
        super(domainDnsTxtRecordParameterValue);
        this.additionalData = domainDnsTxtRecordParameterValue?.additionalData ? domainDnsTxtRecordParameterValue?.additionalData! : {};
        this.text = domainDnsTxtRecordParameterValue?.text;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "text": n => { this.text = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.text){
            writer.writeStringValue("text", this.text);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
