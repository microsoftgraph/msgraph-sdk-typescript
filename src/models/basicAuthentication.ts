import {ApiAuthenticationConfigurationBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BasicAuthentication extends ApiAuthenticationConfigurationBase implements Parsable {
    /** The password. It is not returned in the responses. */
    private _password?: string | undefined;
    /** The username. */
    private _username?: string | undefined;
    /**
     * Instantiates a new BasicAuthentication and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.basicAuthentication";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "password": n => { this.password = n.getStringValue(); },
            "username": n => { this.username = n.getStringValue(); },
        };
    };
    /**
     * Gets the password property value. The password. It is not returned in the responses.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. The password. It is not returned in the responses.
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
        writer.writeStringValue("password", this.password);
        writer.writeStringValue("username", this.username);
    };
    /**
     * Gets the username property value. The username.
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. The username.
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
    };
}
