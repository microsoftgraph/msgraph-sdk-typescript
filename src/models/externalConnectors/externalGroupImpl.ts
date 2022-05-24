import {EntityImpl} from '../';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {ExternalGroup} from './externalGroup';
import {Identity} from './identity';
import {IdentityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of externalConnection entities. */
export class ExternalGroupImpl extends EntityImpl implements ExternalGroup, Parsable {
    /** The description of the external group. Optional. */
    public description?: string | undefined;
    /** The friendly name of the external group. Optional. */
    public displayName?: string | undefined;
    /** A member added to an externalGroup. You can add Azure Active Directory users, Azure Active Directory groups, or other externalGroups as members. */
    public members?: Identity[] | undefined;
    /**
     * Instantiates a new externalGroup and sets the default values.
     * @param externalGroupParameterValue 
     */
    public constructor(externalGroupParameterValue?: ExternalGroup | undefined) {
        super();
        this.description = externalGroupParameterValue?.description ;
        this.displayName = externalGroupParameterValue?.displayName ;
        this.members = externalGroupParameterValue?.members ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<IdentityImpl>(createIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: IdentityImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new IdentityImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityImpl>("members", membersArrValue);
        }
    };
}
