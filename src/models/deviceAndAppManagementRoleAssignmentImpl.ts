import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {RoleAssignmentImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The Role Assignment resource. Role assignments tie together a role definition with members and scopes. There can be one or more role assignments per role. This applies to custom and built-in roles. */
export class DeviceAndAppManagementRoleAssignmentImpl extends RoleAssignmentImpl implements DeviceAndAppManagementRoleAssignment, Parsable {
    /** The list of ids of role member security groups. These are IDs from Azure Active Directory. */
    public members?: string[] | undefined;
    /**
     * Instantiates a new deviceAndAppManagementRoleAssignment and sets the default values.
     * @param deviceAndAppManagementRoleAssignmentParameterValue 
     */
    public constructor(deviceAndAppManagementRoleAssignmentParameterValue?: DeviceAndAppManagementRoleAssignment | undefined) {
        super();
        this.members = deviceAndAppManagementRoleAssignmentParameterValue?.members ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "members": n => { this.members = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.members){
        writer.writeCollectionOfPrimitiveValues<string>("members", this.members);
        }
    };
}
