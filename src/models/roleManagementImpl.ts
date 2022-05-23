import {createRbacApplicationFromDiscriminatorValue} from './createRbacApplicationFromDiscriminatorValue';
import {RbacApplicationImpl} from './index';
import {RbacApplication} from './rbacApplication';
import {RoleManagement} from './roleManagement';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleManagementImpl implements AdditionalDataHolder, Parsable, RoleManagement {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Read-only. Nullable. */
    public directory?: RbacApplication | undefined;
    /** Container for roles and assignments for entitlement management resources. */
    public entitlementManagement?: RbacApplication | undefined;
    /**
     * Instantiates a new RoleManagement and sets the default values.
     * @param roleManagementParameterValue 
     */
    public constructor(roleManagementParameterValue?: RoleManagement | undefined) {
        this.additionalData = roleManagementParameterValue?.additionalData ? roleManagementParameterValue?.additionalData! : {}
        this.directory = roleManagementParameterValue?.directory ;
        this.entitlementManagement = roleManagementParameterValue?.entitlementManagement ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "directory": n => { this.directory = n.getObjectValue<RbacApplicationImpl>(createRbacApplicationFromDiscriminatorValue); },
            "entitlementManagement": n => { this.entitlementManagement = n.getObjectValue<RbacApplicationImpl>(createRbacApplicationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.directory){
        writer.writeObjectValue<RbacApplicationImpl>("directory", new RbacApplicationImpl(this.directory));
        }
        if(this.entitlementManagement){
        writer.writeObjectValue<RbacApplicationImpl>("entitlementManagement", new RbacApplicationImpl(this.entitlementManagement));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
