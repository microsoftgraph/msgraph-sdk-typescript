import {ApiAuthenticationConfigurationBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Pkcs12Certificate extends ApiAuthenticationConfigurationBase implements Parsable {
    /** The password for the pfx file. Required. If no password is used, you must still provide a value of ''. */
    private _password?: string | undefined;
    /** Represents the pfx content that is sent. The value should be a base-64 encoded version of the actual certificate content. Required. */
    private _pkcs12Value?: string | undefined;
    /**
     * Instantiates a new Pkcs12Certificate and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.pkcs12Certificate";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "password": n => { this.password = n.getStringValue(); },
            "pkcs12Value": n => { this.pkcs12Value = n.getStringValue(); },
        };
    };
    /**
     * Gets the password property value. The password for the pfx file. Required. If no password is used, you must still provide a value of ''.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. The password for the pfx file. Required. If no password is used, you must still provide a value of ''.
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Gets the pkcs12Value property value. Represents the pfx content that is sent. The value should be a base-64 encoded version of the actual certificate content. Required.
     * @returns a string
     */
    public get pkcs12Value() {
        return this._pkcs12Value;
    };
    /**
     * Sets the pkcs12Value property value. Represents the pfx content that is sent. The value should be a base-64 encoded version of the actual certificate content. Required.
     * @param value Value to set for the pkcs12Value property.
     */
    public set pkcs12Value(value: string | undefined) {
        this._pkcs12Value = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("password", this.password);
        writer.writeStringValue("pkcs12Value", this.pkcs12Value);
    };
}
