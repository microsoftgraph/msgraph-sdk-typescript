import {createVerifiedDomainFromDiscriminatorValue} from './createVerifiedDomainFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, VerifiedDomain} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VerifiedDomainCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: VerifiedDomain[] | undefined;
    /**
     * Instantiates a new VerifiedDomainCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<VerifiedDomain>(createVerifiedDomainFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<VerifiedDomain>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a verifiedDomain
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: VerifiedDomain[] | undefined) {
        this._value = value;
    };
}
