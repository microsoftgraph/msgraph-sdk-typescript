import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Entity, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ScopedRoleMembership extends Entity implements Parsable {
    /** Unique identifier for the administrative unit that the directory role is scoped to */
    private _administrativeUnitId?: string | undefined;
    /** Unique identifier for the directory role that the member is in. */
    private _roleId?: string | undefined;
    /** The roleMemberInfo property */
    private _roleMemberInfo?: Identity | undefined;
    /**
     * Gets the administrativeUnitId property value. Unique identifier for the administrative unit that the directory role is scoped to
     * @returns a string
     */
    public get administrativeUnitId() {
        return this._administrativeUnitId;
    };
    /**
     * Sets the administrativeUnitId property value. Unique identifier for the administrative unit that the directory role is scoped to
     * @param value Value to set for the administrativeUnitId property.
     */
    public set administrativeUnitId(value: string | undefined) {
        this._administrativeUnitId = value;
    };
    /**
     * Instantiates a new scopedRoleMembership and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "administrativeUnitId": n => { this.administrativeUnitId = n.getStringValue(); },
            "roleId": n => { this.roleId = n.getStringValue(); },
            "roleMemberInfo": n => { this.roleMemberInfo = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the roleId property value. Unique identifier for the directory role that the member is in.
     * @returns a string
     */
    public get roleId() {
        return this._roleId;
    };
    /**
     * Sets the roleId property value. Unique identifier for the directory role that the member is in.
     * @param value Value to set for the roleId property.
     */
    public set roleId(value: string | undefined) {
        this._roleId = value;
    };
    /**
     * Gets the roleMemberInfo property value. The roleMemberInfo property
     * @returns a identity
     */
    public get roleMemberInfo() {
        return this._roleMemberInfo;
    };
    /**
     * Sets the roleMemberInfo property value. The roleMemberInfo property
     * @param value Value to set for the roleMemberInfo property.
     */
    public set roleMemberInfo(value: Identity | undefined) {
        this._roleMemberInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("administrativeUnitId", this.administrativeUnitId);
        writer.writeStringValue("roleId", this.roleId);
        writer.writeObjectValue<Identity>("roleMemberInfo", this.roleMemberInfo);
    };
}
