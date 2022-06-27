import {BasicAuthentication} from './basicAuthentication';
import {ApiAuthenticationConfigurationBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BasicAuthenticationImpl extends ApiAuthenticationConfigurationBaseImpl implements BasicAuthentication {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The password. It is not returned in the responses. */
    public password?: string | undefined;
    /** The username. */
    public username?: string | undefined;
    /**
     * Instantiates a new BasicAuthentication and sets the default values.
     * @param basicAuthenticationParameterValue 
     */
    public constructor(basicAuthenticationParameterValue?: BasicAuthentication | undefined) {
        super(basicAuthenticationParameterValue);
        this.additionalData = basicAuthenticationParameterValue?.additionalData ? basicAuthenticationParameterValue?.additionalData! : {};
        this.password = basicAuthenticationParameterValue?.password;
        this.username = basicAuthenticationParameterValue?.username;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.password){
            writer.writeStringValue("password", this.password);
        }
        if(this.username){
            writer.writeStringValue("username", this.username);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
