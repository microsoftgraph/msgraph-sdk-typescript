import {BaseAuthenticationMethod} from './baseAuthenticationMethod';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodModeDetail extends Entity implements Parsable {
    /** The authenticationMethod property */
    private _authenticationMethod?: BaseAuthenticationMethod | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /**
     * Gets the authenticationMethod property value. The authenticationMethod property
     * @returns a baseAuthenticationMethod
     */
    public get authenticationMethod() {
        return this._authenticationMethod;
    };
    /**
     * Sets the authenticationMethod property value. The authenticationMethod property
     * @param value Value to set for the authenticationMethod property.
     */
    public set authenticationMethod(value: BaseAuthenticationMethod | undefined) {
        this._authenticationMethod = value;
    };
    /**
     * Instantiates a new AuthenticationMethodModeDetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationMethod": n => { this.authenticationMethod = n.getEnumValue<BaseAuthenticationMethod>(BaseAuthenticationMethod); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<BaseAuthenticationMethod>("authenticationMethod", this.authenticationMethod);
        writer.writeStringValue("displayName", this.displayName);
    };
}
