import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodState} from './authenticationMethodState';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of authenticationMethodConfiguration entities. */
export class AuthenticationMethodConfigurationImpl extends EntityImpl implements AuthenticationMethodConfiguration, Parsable {
    /** The state of the policy. Possible values are: enabled, disabled. */
    public state?: AuthenticationMethodState | undefined;
    /**
     * Instantiates a new authenticationMethodConfiguration and sets the default values.
     * @param authenticationMethodConfigurationParameterValue 
     */
    public constructor(authenticationMethodConfigurationParameterValue?: AuthenticationMethodConfiguration | undefined) {
        super();
        this.state = authenticationMethodConfigurationParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "state": n => { this.state = n.getEnumValue<AuthenticationMethodState>(AuthenticationMethodState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.state){
        writer.writeEnumValue<AuthenticationMethodState>("state", this.state);
        }
    };
}
