import {RbacApplication, RoleManagementMember1} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleManagement implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The directory property */
    private _directory?: RbacApplication | RoleManagementMember1 | undefined;
    /** Container for roles and assignments for entitlement management resources. */
    private _entitlementManagement?: RbacApplication | RoleManagementMember1 | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new RoleManagement and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the directory property value. The directory property
     * @returns a roleManagement
     */
    public get directory() {
        return this._directory;
    };
    /**
     * Sets the directory property value. The directory property
     * @param value Value to set for the directory property.
     */
    public set directory(value: RbacApplication | RoleManagementMember1 | undefined) {
        this._directory = value;
    };
    /**
     * Gets the entitlementManagement property value. Container for roles and assignments for entitlement management resources.
     * @returns a roleManagement
     */
    public get entitlementManagement() {
        return this._entitlementManagement;
    };
    /**
     * Sets the entitlementManagement property value. Container for roles and assignments for entitlement management resources.
     * @param value Value to set for the entitlementManagement property.
     */
    public set entitlementManagement(value: RbacApplication | RoleManagementMember1 | undefined) {
        this._entitlementManagement = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "directory": n => { this.directory = n.getObjectValue<RbacApplication>(createRbacApplicationFromDiscriminatorValue); },
            "entitlementManagement": n => { this.entitlementManagement = n.getObjectValue<RbacApplication>(createRbacApplicationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<RbacApplication>("directory", this.directory);
        writer.writeObjectValue<RbacApplication>("entitlementManagement", this.entitlementManagement);
        writer.writeAdditionalData(this.additionalData);
    };
}
