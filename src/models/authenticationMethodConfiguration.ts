import {AuthenticationMethodState} from './authenticationMethodState';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of authenticationMethodConfiguration entities. */
export class AuthenticationMethodConfiguration extends Entity implements Parsable {
    /** The state of the policy. Possible values are: enabled, disabled. */
    private _state?: AuthenticationMethodState | undefined;
    /**
     * Instantiates a new authenticationMethodConfiguration and sets the default values.
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
        writer.writeEnumValue<AuthenticationMethodState>("state", this.state);
    };
    /**
     * Gets the state property value. The state of the policy. Possible values are: enabled, disabled.
     * @returns a authenticationMethodState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state of the policy. Possible values are: enabled, disabled.
     * @param value Value to set for the state property.
     */
    public set state(value: AuthenticationMethodState | undefined) {
        this._state = value;
    };
}
