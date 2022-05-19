import {createRoleDefinitionFromDiscriminatorValue} from './createRoleDefinitionFromDiscriminatorValue';
import {Entity, RoleDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The Role Assignment resource. Role assignments tie together a role definition with members and scopes. There can be one or more role assignments per role. This applies to custom and built-in roles. */
export class RoleAssignment extends Entity implements Parsable {
    /** Description of the Role Assignment. */
    private _description?: string | undefined;
    /** The display or friendly name of the role Assignment. */
    private _displayName?: string | undefined;
    /** List of ids of role scope member security groups.  These are IDs from Azure Active Directory. */
    private _resourceScopes?: string[] | undefined;
    /** Role definition this assignment is part of. */
    private _roleDefinition?: RoleDefinition | undefined;
    /**
     * Instantiates a new roleAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Description of the Role Assignment.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the Role Assignment.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display or friendly name of the role Assignment.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display or friendly name of the role Assignment.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "resourceScopes": n => { this.resourceScopes = n.getCollectionOfPrimitiveValues<string>(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<RoleDefinition>(createRoleDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the resourceScopes property value. List of ids of role scope member security groups.  These are IDs from Azure Active Directory.
     * @returns a string
     */
    public get resourceScopes() {
        return this._resourceScopes;
    };
    /**
     * Sets the resourceScopes property value. List of ids of role scope member security groups.  These are IDs from Azure Active Directory.
     * @param value Value to set for the resourceScopes property.
     */
    public set resourceScopes(value: string[] | undefined) {
        this._resourceScopes = value;
    };
    /**
     * Gets the roleDefinition property value. Role definition this assignment is part of.
     * @returns a roleDefinition
     */
    public get roleDefinition() {
        return this._roleDefinition;
    };
    /**
     * Sets the roleDefinition property value. Role definition this assignment is part of.
     * @param value Value to set for the roleDefinition property.
     */
    public set roleDefinition(value: RoleDefinition | undefined) {
        this._roleDefinition = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", this.resourceScopes);
        writer.writeObjectValue<RoleDefinition>("roleDefinition", this.roleDefinition);
    };
}
