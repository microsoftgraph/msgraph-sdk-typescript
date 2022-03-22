import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Entity, Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScopedRoleMembership extends Entity implements Parsable {
    /** Unique identifier for the administrative unit that the directory role is scoped to  */
    private _administrativeUnitId?: string | undefined;
    /** Unique identifier for the directory role that the member is in.  */
    private _roleId?: string | undefined;
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
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "administrativeUnitId": (o, n) => { (o as unknown as ScopedRoleMembership).administrativeUnitId = n.getStringValue(); },
            "roleId": (o, n) => { (o as unknown as ScopedRoleMembership).roleId = n.getStringValue(); },
            "roleMemberInfo": (o, n) => { (o as unknown as ScopedRoleMembership).roleMemberInfo = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
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
     * Gets the roleMemberInfo property value. 
     * @returns a identity
     */
    public get roleMemberInfo() {
        return this._roleMemberInfo;
    };
    /**
     * Sets the roleMemberInfo property value. 
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
