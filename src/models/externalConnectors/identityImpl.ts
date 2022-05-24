import {EntityImpl} from '../';
import {Identity} from './identity';
import {IdentityType} from './identityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of externalConnection entities. */
export class IdentityImpl extends EntityImpl implements Identity, Parsable {
    /** The type of identity. Possible values are: user or group for Azure AD identities and externalgroup for groups in an external system. */
    public type?: IdentityType | undefined;
    /**
     * Instantiates a new identity and sets the default values.
     * @param identityParameterValue 
     */
    public constructor(identityParameterValue?: Identity | undefined) {
        super();
        this.type = identityParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "type": n => { this.type = n.getEnumValue<IdentityType>(IdentityType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.type){
        writer.writeEnumValue<IdentityType>("type", this.type);
        }
    };
}
