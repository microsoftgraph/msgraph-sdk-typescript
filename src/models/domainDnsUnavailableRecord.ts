import {DomainDnsRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsUnavailableRecord extends DomainDnsRecord implements Parsable {
    /** Provides the reason why the DomainDnsUnavailableRecord entity is returned. */
    private _description?: string | undefined;
    /**
     * Instantiates a new DomainDnsUnavailableRecord and sets the default values.
     */
    public constructor() {
        super();
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
        this._description = value;
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
        writer.writeStringValue("description", this.description);
    };
}
