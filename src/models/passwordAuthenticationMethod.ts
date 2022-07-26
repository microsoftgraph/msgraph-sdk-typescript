import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** For security, the password is always returned as null from a LIST or GET operation. */
    private _password?: string | undefined;
    /**
     * Instantiates a new PasswordAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.passwordAuthenticationMethod";
    };
    /**
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "password": n => { this.password = n.getStringValue(); },
        };
    };
    /**
     * Gets the password property value. For security, the password is always returned as null from a LIST or GET operation.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. For security, the password is always returned as null from a LIST or GET operation.
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("password", this.password);
    };
}
