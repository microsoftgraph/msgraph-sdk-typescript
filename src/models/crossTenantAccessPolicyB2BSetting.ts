import {createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue} from './createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue';
import {CrossTenantAccessPolicyTargetConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicyB2BSetting implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The list of applications targeted with your cross-tenant access policy. */
    private _applications?: CrossTenantAccessPolicyTargetConfiguration | undefined;
    /** The list of users and groups targeted with your cross-tenant access policy. */
    private _usersAndGroups?: CrossTenantAccessPolicyTargetConfiguration | undefined;
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
     * Gets the applications property value. The list of applications targeted with your cross-tenant access policy.
     * @returns a crossTenantAccessPolicyTargetConfiguration
     */
    public get applications() {
        return this._applications;
    };
    /**
     * Sets the applications property value. The list of applications targeted with your cross-tenant access policy.
     * @param value Value to set for the applications property.
     */
    public set applications(value: CrossTenantAccessPolicyTargetConfiguration | undefined) {
        this._applications = value;
    };
    /**
     * Instantiates a new crossTenantAccessPolicyB2BSetting and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applications": n => { this.applications = n.getObjectValue<CrossTenantAccessPolicyTargetConfiguration>(createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue); },
            "usersAndGroups": n => { this.usersAndGroups = n.getObjectValue<CrossTenantAccessPolicyTargetConfiguration>(createCrossTenantAccessPolicyTargetConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<CrossTenantAccessPolicyTargetConfiguration>("applications", this.applications);
        writer.writeObjectValue<CrossTenantAccessPolicyTargetConfiguration>("usersAndGroups", this.usersAndGroups);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the usersAndGroups property value. The list of users and groups targeted with your cross-tenant access policy.
     * @returns a crossTenantAccessPolicyTargetConfiguration
     */
    public get usersAndGroups() {
        return this._usersAndGroups;
    };
    /**
     * Sets the usersAndGroups property value. The list of users and groups targeted with your cross-tenant access policy.
     * @param value Value to set for the usersAndGroups property.
     */
    public set usersAndGroups(value: CrossTenantAccessPolicyTargetConfiguration | undefined) {
        this._usersAndGroups = value;
    };
}
