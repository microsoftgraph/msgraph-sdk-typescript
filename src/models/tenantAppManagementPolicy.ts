import {createAppManagementConfigurationFromDiscriminatorValue} from './createAppManagementConfigurationFromDiscriminatorValue';
import {AppManagementConfiguration, PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TenantAppManagementPolicy extends PolicyBase implements Parsable {
    /** The applicationRestrictions property */
    private _applicationRestrictions?: AppManagementConfiguration | undefined;
    /** The isEnabled property */
    private _isEnabled?: boolean | undefined;
    /** The servicePrincipalRestrictions property */
    private _servicePrincipalRestrictions?: AppManagementConfiguration | undefined;
    /**
     * Gets the applicationRestrictions property value. The applicationRestrictions property
     * @returns a appManagementConfiguration
     */
    public get applicationRestrictions() {
        return this._applicationRestrictions;
    };
    /**
     * Sets the applicationRestrictions property value. The applicationRestrictions property
     * @param value Value to set for the applicationRestrictions property.
     */
    public set applicationRestrictions(value: AppManagementConfiguration | undefined) {
        this._applicationRestrictions = value;
    };
    /**
     * Instantiates a new TenantAppManagementPolicy and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.tenantAppManagementPolicy";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicationRestrictions": n => { this.applicationRestrictions = n.getObjectValue<AppManagementConfiguration>(createAppManagementConfigurationFromDiscriminatorValue); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "servicePrincipalRestrictions": n => { this.servicePrincipalRestrictions = n.getObjectValue<AppManagementConfiguration>(createAppManagementConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isEnabled property value. The isEnabled property
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. The isEnabled property
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        this._isEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AppManagementConfiguration>("applicationRestrictions", this.applicationRestrictions);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeObjectValue<AppManagementConfiguration>("servicePrincipalRestrictions", this.servicePrincipalRestrictions);
    };
    /**
     * Gets the servicePrincipalRestrictions property value. The servicePrincipalRestrictions property
     * @returns a appManagementConfiguration
     */
    public get servicePrincipalRestrictions() {
        return this._servicePrincipalRestrictions;
    };
    /**
     * Sets the servicePrincipalRestrictions property value. The servicePrincipalRestrictions property
     * @param value Value to set for the servicePrincipalRestrictions property.
     */
    public set servicePrincipalRestrictions(value: AppManagementConfiguration | undefined) {
        this._servicePrincipalRestrictions = value;
    };
}
