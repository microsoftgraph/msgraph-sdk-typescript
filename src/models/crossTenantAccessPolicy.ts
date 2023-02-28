import {createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue} from './createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue';
import {createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue} from './createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue';
import {CrossTenantAccessPolicyConfigurationDefault, CrossTenantAccessPolicyConfigurationPartner, PolicyBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CrossTenantAccessPolicy extends PolicyBase implements Parsable {
    /** Used to specify which Microsoft clouds an organization would like to collaborate with. By default, this value is empty. Supported values for this field are: microsoftonline.com, microsoftonline.us, and partner.microsoftonline.cn. */
    private _allowedCloudEndpoints?: string[] | undefined;
    /** Defines the default configuration for how your organization interacts with external Azure Active Directory organizations. */
    private _defaultEscaped?: CrossTenantAccessPolicyConfigurationDefault | undefined;
    /** Defines partner-specific configurations for external Azure Active Directory organizations. */
    private _partners?: CrossTenantAccessPolicyConfigurationPartner[] | undefined;
    /**
     * Gets the allowedCloudEndpoints property value. Used to specify which Microsoft clouds an organization would like to collaborate with. By default, this value is empty. Supported values for this field are: microsoftonline.com, microsoftonline.us, and partner.microsoftonline.cn.
     * @returns a string
     */
    public get allowedCloudEndpoints() {
        return this._allowedCloudEndpoints;
    };
    /**
     * Sets the allowedCloudEndpoints property value. Used to specify which Microsoft clouds an organization would like to collaborate with. By default, this value is empty. Supported values for this field are: microsoftonline.com, microsoftonline.us, and partner.microsoftonline.cn.
     * @param value Value to set for the allowedCloudEndpoints property.
     */
    public set allowedCloudEndpoints(value: string[] | undefined) {
        this._allowedCloudEndpoints = value;
    };
    /**
     * Instantiates a new CrossTenantAccessPolicy and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.crossTenantAccessPolicy";
    };
    /**
     * Gets the default property value. Defines the default configuration for how your organization interacts with external Azure Active Directory organizations.
     * @returns a crossTenantAccessPolicyConfigurationDefault
     */
    public get defaultEscaped() {
        return this._defaultEscaped;
    };
    /**
     * Sets the default property value. Defines the default configuration for how your organization interacts with external Azure Active Directory organizations.
     * @param value Value to set for the defaultEscaped property.
     */
    public set defaultEscaped(value: CrossTenantAccessPolicyConfigurationDefault | undefined) {
        this._defaultEscaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedCloudEndpoints": n => { this.allowedCloudEndpoints = n.getCollectionOfPrimitiveValues<string>(); },
            "default": n => { this.defaultEscaped = n.getObjectValue<CrossTenantAccessPolicyConfigurationDefault>(createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue); },
            "partners": n => { this.partners = n.getCollectionOfObjectValues<CrossTenantAccessPolicyConfigurationPartner>(createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the partners property value. Defines partner-specific configurations for external Azure Active Directory organizations.
     * @returns a crossTenantAccessPolicyConfigurationPartner
     */
    public get partners() {
        return this._partners;
    };
    /**
     * Sets the partners property value. Defines partner-specific configurations for external Azure Active Directory organizations.
     * @param value Value to set for the partners property.
     */
    public set partners(value: CrossTenantAccessPolicyConfigurationPartner[] | undefined) {
        this._partners = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("allowedCloudEndpoints", this.allowedCloudEndpoints);
        writer.writeObjectValue<CrossTenantAccessPolicyConfigurationDefault>("default", this.defaultEscaped);
        writer.writeCollectionOfObjectValues<CrossTenantAccessPolicyConfigurationPartner>("partners", this.partners);
    };
}
