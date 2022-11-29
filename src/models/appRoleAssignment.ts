import {DirectoryObject} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class AppRoleAssignment extends DirectoryObject implements Parsable {
    /** The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles property on the resource application's service principal (resourceId). If the resource application has not declared any app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal is assigned to the resource app without any specific app roles. Required on create. */
    private _appRoleId?: string | undefined;
    /** The time when the app role assignment was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports $filter (eq and startswith). */
    private _principalDisplayName?: string | undefined;
    /** The unique identifier (id) for the user, security group, or service principal being granted the app role. Security groups with dynamic memberships are supported. Required on create. */
    private _principalId?: string | undefined;
    /** The type of the assigned principal. This can either be User, Group, or ServicePrincipal. Read-only. */
    private _principalType?: string | undefined;
    /** The display name of the resource app's service principal to which the assignment is made. */
    private _resourceDisplayName?: string | undefined;
    /** The unique identifier (id) for the resource service principal for which the assignment is made. Required on create. Supports $filter (eq only). */
    private _resourceId?: string | undefined;
    /**
     * Gets the appRoleId property value. The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles property on the resource application's service principal (resourceId). If the resource application has not declared any app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal is assigned to the resource app without any specific app roles. Required on create.
     * @returns a string
     */
    public get appRoleId() {
        return this._appRoleId;
    };
    /**
     * Sets the appRoleId property value. The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles property on the resource application's service principal (resourceId). If the resource application has not declared any app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal is assigned to the resource app without any specific app roles. Required on create.
     * @param value Value to set for the appRoleId property.
     */
    public set appRoleId(value: string | undefined) {
        this._appRoleId = value;
    };
    /**
     * Instantiates a new appRoleAssignment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.appRoleAssignment";
    };
    /**
     * Gets the createdDateTime property value. The time when the app role assignment was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The time when the app role assignment was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
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
     * Gets the principalDisplayName property value. The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports $filter (eq and startswith).
     * @returns a string
     */
    public get principalDisplayName() {
        return this._principalDisplayName;
    };
    /**
     * Sets the principalDisplayName property value. The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports $filter (eq and startswith).
     * @param value Value to set for the principalDisplayName property.
     */
    public set principalDisplayName(value: string | undefined) {
        this._principalDisplayName = value;
    };
    /**
     * Gets the principalId property value. The unique identifier (id) for the user, security group, or service principal being granted the app role. Security groups with dynamic memberships are supported. Required on create.
     * @returns a string
     */
    public get principalId() {
        return this._principalId;
    };
    /**
     * Sets the principalId property value. The unique identifier (id) for the user, security group, or service principal being granted the app role. Security groups with dynamic memberships are supported. Required on create.
     * @param value Value to set for the principalId property.
     */
    public set principalId(value: string | undefined) {
        this._principalId = value;
    };
    /**
     * Gets the principalType property value. The type of the assigned principal. This can either be User, Group, or ServicePrincipal. Read-only.
     * @returns a string
     */
    public get principalType() {
        return this._principalType;
    };
    /**
     * Sets the principalType property value. The type of the assigned principal. This can either be User, Group, or ServicePrincipal. Read-only.
     * @param value Value to set for the principalType property.
     */
    public set principalType(value: string | undefined) {
        this._principalType = value;
    };
    /**
     * Gets the resourceDisplayName property value. The display name of the resource app's service principal to which the assignment is made.
     * @returns a string
     */
    public get resourceDisplayName() {
        return this._resourceDisplayName;
    };
    /**
     * Sets the resourceDisplayName property value. The display name of the resource app's service principal to which the assignment is made.
     * @param value Value to set for the resourceDisplayName property.
     */
    public set resourceDisplayName(value: string | undefined) {
        this._resourceDisplayName = value;
    };
    /**
     * Gets the resourceId property value. The unique identifier (id) for the resource service principal for which the assignment is made. Required on create. Supports $filter (eq only).
     * @returns a string
     */
    public get resourceId() {
        return this._resourceId;
    };
    /**
     * Sets the resourceId property value. The unique identifier (id) for the resource service principal for which the assignment is made. Required on create. Supports $filter (eq only).
     * @param value Value to set for the resourceId property.
     */
    public set resourceId(value: string | undefined) {
        this._resourceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appRoleId", this.appRoleId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("principalDisplayName", this.principalDisplayName);
        writer.writeStringValue("principalId", this.principalId);
        writer.writeStringValue("principalType", this.principalType);
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        writer.writeStringValue("resourceId", this.resourceId);
    };
}
