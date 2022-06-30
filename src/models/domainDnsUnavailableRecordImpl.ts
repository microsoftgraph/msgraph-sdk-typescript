import {DomainDnsUnavailableRecord} from './domainDnsUnavailableRecord';
import {DomainDnsRecordImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsUnavailableRecordImpl extends DomainDnsRecordImpl implements DomainDnsUnavailableRecord {
    /** Provides the reason why the DomainDnsUnavailableRecord entity is returned. */
    private _description?: string | undefined;
    /**
     * Instantiates a new DomainDnsUnavailableRecord and sets the default values.
     * @param domainDnsUnavailableRecordParameterValue 
     */
    public constructor(domainDnsUnavailableRecordParameterValue?: DomainDnsUnavailableRecord | undefined) {
        super(domainDnsUnavailableRecordParameterValue);
        this._description = domainDnsUnavailableRecordParameterValue?.description;
    };
    /**
     * Gets the description property value. Provides the reason why the DomainDnsUnavailableRecord entity is returned.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Provides the reason why the DomainDnsUnavailableRecord entity is returned.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
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
