import {AuthenticationMethod} from './authenticationMethod';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class AuthenticationMethodImpl extends EntityImpl implements AuthenticationMethod, Parsable {
    /**
     * Instantiates a new authenticationMethod and sets the default values.
     * @param authenticationMethodParameterValue 
     */
    public constructor(authenticationMethodParameterValue?: AuthenticationMethod | undefined) {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
