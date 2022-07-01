import {createRbacApplicationFromDiscriminatorValue} from './createRbacApplicationFromDiscriminatorValue';
import {RbacApplicationImpl} from './index';
import {RbacApplication} from './rbacApplication';
import {RoleManagement} from './roleManagement';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleManagementImpl implements RoleManagement {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The directory property */
    private _directory?: RbacApplication | undefined;
    /** Container for roles and assignments for entitlement management resources. */
    private _entitlementManagement?: RbacApplication | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new RoleManagement and sets the default values.
     * @param roleManagementParameterValue 
     */
    public constructor(roleManagementParameterValue?: RoleManagement | undefined) {
        this._additionalData = roleManagementParameterValue?.additionalData ? roleManagementParameterValue?.additionalData! : {};
        this._directory = roleManagementParameterValue?.directory;
        this._entitlementManagement = roleManagementParameterValue?.entitlementManagement;
    };
    /**
     * Gets the directory property value. The directory property
     * @returns a RbacApplicationInterface
     */
    public get directory() {
        return this._directory;
    };
    /**
     * Sets the directory property value. The directory property
     * @param value Value to set for the directory property.
     */
    public set directory(value: RbacApplication | undefined) {
        if(value) {
            this._directory = value instanceof RbacApplicationImpl? value as RbacApplicationImpl: new RbacApplicationImpl(value);
        }
    };
    /**
     * Gets the entitlementManagement property value. Container for roles and assignments for entitlement management resources.
     * @returns a RbacApplicationInterface
     */
    public get entitlementManagement() {
        return this._entitlementManagement;
    };
    /**
     * Sets the entitlementManagement property value. Container for roles and assignments for entitlement management resources.
     * @param value Value to set for the entitlementManagement property.
     */
    public set entitlementManagement(value: RbacApplication | undefined) {
        if(value) {
            this._entitlementManagement = value instanceof RbacApplicationImpl? value as RbacApplicationImpl: new RbacApplicationImpl(value);
        }
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
            writer.writeObjectValue<RbacApplicationImpl>("directory", (this.directory instanceof RbacApplicationImpl? this.directory as RbacApplicationImpl: new RbacApplicationImpl(this.directory)));
        }
        if(this.entitlementManagement){
            writer.writeObjectValue<RbacApplicationImpl>("entitlementManagement", (this.entitlementManagement instanceof RbacApplicationImpl? this.entitlementManagement as RbacApplicationImpl: new RbacApplicationImpl(this.entitlementManagement)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
