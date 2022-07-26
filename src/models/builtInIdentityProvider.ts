import {IdentityProviderBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BuiltInIdentityProvider extends IdentityProviderBase implements Parsable {
    /** The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required. */
    private _identityProviderType?: string | undefined;
    /**
     * Instantiates a new BuiltInIdentityProvider and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.builtInIdentityProvider";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "identityProviderType": n => { this.identityProviderType = n.getStringValue(); },
        };
    };
    /**
     * Gets the identityProviderType property value. The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required.
     * @returns a string
     */
    public get identityProviderType() {
        return this._identityProviderType;
    };
    /**
     * Sets the identityProviderType property value. The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required.
     * @param value Value to set for the identityProviderType property.
     */
    public set identityProviderType(value: string | undefined) {
        this._identityProviderType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("identityProviderType", this.identityProviderType);
    };
}
