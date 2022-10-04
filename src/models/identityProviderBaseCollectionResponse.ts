import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, IdentityProviderBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProviderBaseCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: IdentityProviderBase[] | undefined;
    /**
     * Instantiates a new IdentityProviderBaseCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a identityProviderBase
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: IdentityProviderBase[] | undefined) {
        this._value = value;
    };
}
