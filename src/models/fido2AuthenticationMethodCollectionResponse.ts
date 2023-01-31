import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Fido2AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2AuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: Fido2AuthenticationMethod[] | undefined;
    /**
     * Instantiates a new Fido2AuthenticationMethodCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Fido2AuthenticationMethod>(createFido2AuthenticationMethodFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Fido2AuthenticationMethod>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a fido2AuthenticationMethod
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: Fido2AuthenticationMethod[] | undefined) {
        this._value = value;
    };
}
