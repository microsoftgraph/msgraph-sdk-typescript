import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {EntityImpl, IdentityImpl} from './index';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ScopedRoleMembershipImpl extends EntityImpl implements ScopedRoleMembership {
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
        if(value) {
            this._administrativeUnitId = value;
        }
    };
    /**
     * Instantiates a new scopedRoleMembership and sets the default values.
     * @param scopedRoleMembershipParameterValue 
     */
    public constructor(scopedRoleMembershipParameterValue?: ScopedRoleMembership | undefined) {
        super(scopedRoleMembershipParameterValue);
        this._administrativeUnitId = scopedRoleMembershipParameterValue?.administrativeUnitId;
        this._roleId = scopedRoleMembershipParameterValue?.roleId;
        this._roleMemberInfo = scopedRoleMembershipParameterValue?.roleMemberInfo;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "administrativeUnitId": n => { this.administrativeUnitId = n.getStringValue(); },
            "roleId": n => { this.roleId = n.getStringValue(); },
            "roleMemberInfo": n => { this.roleMemberInfo = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
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
        if(value) {
            this._roleId = value;
        }
    };
    /**
     * Gets the roleMemberInfo property value. The roleMemberInfo property
     * @returns a IdentityInterface
     */
    public get roleMemberInfo() {
        return this._roleMemberInfo;
    };
    /**
     * Sets the roleMemberInfo property value. The roleMemberInfo property
     * @param value Value to set for the roleMemberInfo property.
     */
    public set roleMemberInfo(value: Identity | undefined) {
        if(value) {
            this._roleMemberInfo = value instanceof IdentityImpl? value : new IdentityImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.administrativeUnitId){
            writer.writeStringValue("administrativeUnitId", this.administrativeUnitId);
        }
        if(this.roleId){
            writer.writeStringValue("roleId", this.roleId);
        }
        if(this.roleMemberInfo){
            writer.writeObjectValue<IdentityImpl>("roleMemberInfo", (!this.roleMemberInfo || this.roleMemberInfo instanceof IdentityImpl? this.roleMemberInfo : new IdentityImpl(this.roleMemberInfo)));
        }
    };
}
