import {IdentityProviderBase} from './identityProviderBase';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the directory singleton. */
export class IdentityProviderBaseImpl extends EntityImpl implements IdentityProviderBase {
    /** The display name of the identity provider. */
    private _displayName?: string | undefined;
    /**
     * Instantiates a new identityProviderBase and sets the default values.
     * @param identityProviderBaseParameterValue 
     */
    public constructor(identityProviderBaseParameterValue?: IdentityProviderBase | undefined) {
        super(identityProviderBaseParameterValue);
        this._displayName = identityProviderBaseParameterValue?.displayName;
    };
    /**
     * Gets the displayName property value. The display name of the identity provider.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the identity provider.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
    };
}
