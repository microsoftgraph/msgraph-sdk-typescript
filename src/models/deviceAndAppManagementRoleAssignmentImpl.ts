import {DeviceAndAppManagementRoleAssignment} from './deviceAndAppManagementRoleAssignment';
import {RoleAssignmentImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceAndAppManagementRoleAssignmentImpl extends RoleAssignmentImpl implements DeviceAndAppManagementRoleAssignment {
    /** The list of ids of role member security groups. These are IDs from Azure Active Directory. */
    private _members?: string[] | undefined;
    /**
     * Instantiates a new DeviceAndAppManagementRoleAssignment and sets the default values.
     * @param deviceAndAppManagementRoleAssignmentParameterValue 
     */
    public constructor(deviceAndAppManagementRoleAssignmentParameterValue?: DeviceAndAppManagementRoleAssignment | undefined) {
        super(deviceAndAppManagementRoleAssignmentParameterValue);
        this._members = deviceAndAppManagementRoleAssignmentParameterValue?.members;
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
     * Gets the members property value. The list of ids of role member security groups. These are IDs from Azure Active Directory.
     * @returns a string
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. The list of ids of role member security groups. These are IDs from Azure Active Directory.
     * @param value Value to set for the members property.
     */
    public set members(value: string[] | undefined) {
        if(value) {
            this._members = value;
        }
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
