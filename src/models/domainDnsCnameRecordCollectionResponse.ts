import {createDomainDnsCnameRecordFromDiscriminatorValue} from './createDomainDnsCnameRecordFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, DomainDnsCnameRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsCnameRecordCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: DomainDnsCnameRecord[] | undefined;
    /**
     * Instantiates a new DomainDnsCnameRecordCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<DomainDnsCnameRecord>(createDomainDnsCnameRecordFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DomainDnsCnameRecord>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a domainDnsCnameRecord
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: DomainDnsCnameRecord[] | undefined) {
        this._value = value;
    };
}
