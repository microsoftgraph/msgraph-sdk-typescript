import {createPasswordCredentialConfigurationFromDiscriminatorValue} from './createPasswordCredentialConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, PasswordCredentialConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordCredentialConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: PasswordCredentialConfiguration[] | undefined;
    /**
     * Instantiates a new PasswordCredentialConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<PasswordCredentialConfiguration>(createPasswordCredentialConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PasswordCredentialConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a passwordCredentialConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: PasswordCredentialConfiguration[] | undefined) {
        this._value = value;
    };
}
