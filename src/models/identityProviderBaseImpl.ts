import {IdentityProviderBase} from './identityProviderBase';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the directory singleton. */
export class IdentityProviderBaseImpl extends EntityImpl implements IdentityProviderBase, Parsable {
    /** The display name of the identity provider. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new identityProviderBase and sets the default values.
     * @param identityProviderBaseParameterValue 
     */
    public constructor(identityProviderBaseParameterValue?: IdentityProviderBase | undefined) {
        super();
        this.displayName = identityProviderBaseParameterValue?.displayName ;
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
