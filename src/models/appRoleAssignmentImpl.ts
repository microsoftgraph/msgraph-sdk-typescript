import {AppRoleAssignment} from './appRoleAssignment';
import {DirectoryObjectImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class AppRoleAssignmentImpl extends DirectoryObjectImpl implements AppRoleAssignment, Parsable {
    /** The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles property on the resource application's service principal (resourceId). If the resource application has not declared any app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal is assigned to the resource app without any specific app roles. Required on create. */
    public appRoleId?: string | undefined;
    /** The time when the app role assignment was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports $filter (eq and startswith). */
    public principalDisplayName?: string | undefined;
    /** The unique identifier (id) for the user, group, or service principal being granted the app role. Required on create. */
    public principalId?: string | undefined;
    /** The type of the assigned principal. This can either be User, Group, or ServicePrincipal. Read-only. */
    public principalType?: string | undefined;
    /** The display name of the resource app's service principal to which the assignment is made. */
    public resourceDisplayName?: string | undefined;
    /** The unique identifier (id) for the resource service principal for which the assignment is made. Required on create. Supports $filter (eq only). */
    public resourceId?: string | undefined;
    /**
     * Instantiates a new appRoleAssignment and sets the default values.
     * @param appRoleAssignmentParameterValue 
     */
    public constructor(appRoleAssignmentParameterValue?: AppRoleAssignment | undefined) {
        super();
        this.appRoleId = appRoleAssignmentParameterValue?.appRoleId ;
        this.createdDateTime = appRoleAssignmentParameterValue?.createdDateTime ;
        this.principalDisplayName = appRoleAssignmentParameterValue?.principalDisplayName ;
        this.principalId = appRoleAssignmentParameterValue?.principalId ;
        this.principalType = appRoleAssignmentParameterValue?.principalType ;
        this.resourceDisplayName = appRoleAssignmentParameterValue?.resourceDisplayName ;
        this.resourceId = appRoleAssignmentParameterValue?.resourceId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appRoleId": n => { this.appRoleId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "principalDisplayName": n => { this.principalDisplayName = n.getStringValue(); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "principalType": n => { this.principalType = n.getStringValue(); },
            "resourceDisplayName": n => { this.resourceDisplayName = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appRoleId){
        writer.writeStringValue("appRoleId", this.appRoleId);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.principalDisplayName){
        writer.writeStringValue("principalDisplayName", this.principalDisplayName);
        }
        if(this.principalId){
        writer.writeStringValue("principalId", this.principalId);
        }
        if(this.principalType){
        writer.writeStringValue("principalType", this.principalType);
        }
        if(this.resourceDisplayName){
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        }
        if(this.resourceId){
        writer.writeStringValue("resourceId", this.resourceId);
        }
    };
}
