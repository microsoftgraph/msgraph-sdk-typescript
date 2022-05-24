import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {EntityImpl, IdentityImpl} from './index';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ScopedRoleMembershipImpl extends EntityImpl implements Parsable, ScopedRoleMembership {
    /** Unique identifier for the administrative unit that the directory role is scoped to */
    public administrativeUnitId?: string | undefined;
    /** Unique identifier for the directory role that the member is in. */
    public roleId?: string | undefined;
    /** The roleMemberInfo property */
    public roleMemberInfo?: Identity | undefined;
    /**
     * Instantiates a new scopedRoleMembership and sets the default values.
     * @param scopedRoleMembershipParameterValue 
     */
    public constructor(scopedRoleMembershipParameterValue?: ScopedRoleMembership | undefined) {
        super();
        this.administrativeUnitId = scopedRoleMembershipParameterValue?.administrativeUnitId ;
        this.roleId = scopedRoleMembershipParameterValue?.roleId ;
        this.roleMemberInfo = scopedRoleMembershipParameterValue?.roleMemberInfo ;
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
        writer.writeObjectValue<IdentityImpl>("roleMemberInfo", new IdentityImpl(this.roleMemberInfo));
        }
    };
}
