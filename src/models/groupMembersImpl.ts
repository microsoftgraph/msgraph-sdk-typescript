import {GroupMembers} from './groupMembers';
import {SubjectSetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupMembersImpl extends SubjectSetImpl implements GroupMembers {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the group in Azure AD. Read only. */
    public description?: string | undefined;
    /** The ID of the group in Azure AD. */
    public groupId?: string | undefined;
    /**
     * Instantiates a new GroupMembers and sets the default values.
     * @param groupMembersParameterValue 
     */
    public constructor(groupMembersParameterValue?: GroupMembers | undefined) {
        super(groupMembersParameterValue);
        this.additionalData = groupMembersParameterValue?.additionalData ? groupMembersParameterValue?.additionalData! : {};
        this.description = groupMembersParameterValue?.description;
        this.groupId = groupMembersParameterValue?.groupId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "groupId": n => { this.groupId = n.getStringValue(); },
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
        if(this.groupId){
            writer.writeStringValue("groupId", this.groupId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
