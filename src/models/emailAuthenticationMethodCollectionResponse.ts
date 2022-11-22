import {createEmailAuthenticationMethodFromDiscriminatorValue} from './createEmailAuthenticationMethodFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, EmailAuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: EmailAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new EmailAuthenticationMethodCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<EmailAuthenticationMethod>(createEmailAuthenticationMethodFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EmailAuthenticationMethod>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a emailAuthenticationMethod
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: EmailAuthenticationMethod[] | undefined) {
        this._value = value;
    };
}
