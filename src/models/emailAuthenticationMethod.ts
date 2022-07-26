import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The email address registered to this user. */
    private _emailAddress?: string | undefined;
    /**
     * Instantiates a new EmailAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.emailAuthenticationMethod";
    };
    /**
     * Gets the emailAddress property value. The email address registered to this user.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The email address registered to this user.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("emailAddress", this.emailAddress);
    };
}
