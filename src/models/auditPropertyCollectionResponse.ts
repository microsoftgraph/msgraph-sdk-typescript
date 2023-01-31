import {createAuditPropertyFromDiscriminatorValue} from './createAuditPropertyFromDiscriminatorValue';
import {AuditProperty, BaseCollectionPaginationCountResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuditPropertyCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: AuditProperty[] | undefined;
    /**
     * Instantiates a new AuditPropertyCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<AuditProperty>(createAuditPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AuditProperty>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a auditProperty
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: AuditProperty[] | undefined) {
        this._value = value;
    };
}
