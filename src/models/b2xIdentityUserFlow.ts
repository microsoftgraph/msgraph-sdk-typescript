import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createIdentityProviderFromDiscriminatorValue} from './createIdentityProviderFromDiscriminatorValue';
import {createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue} from './createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue';
import {createUserFlowApiConnectorConfigurationFromDiscriminatorValue} from './createUserFlowApiConnectorConfigurationFromDiscriminatorValue';
import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from './createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {IdentityProvider, IdentityProviderBase, IdentityUserFlow, IdentityUserFlowAttributeAssignment, UserFlowApiConnectorConfiguration, UserFlowLanguageConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class B2xIdentityUserFlow extends IdentityUserFlow implements Parsable {
    /** Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration. */
    private _apiConnectorConfiguration?: UserFlowApiConnectorConfiguration | undefined;
    /** The identity providers included in the user flow. */
    private _identityProviders?: IdentityProvider[] | undefined;
    /** The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows. */
    private _languages?: UserFlowLanguageConfiguration[] | undefined;
    /** The user attribute assignments included in the user flow. */
    private _userAttributeAssignments?: IdentityUserFlowAttributeAssignment[] | undefined;
    /** The userFlowIdentityProviders property */
    private _userFlowIdentityProviders?: IdentityProviderBase[] | undefined;
    /**
     * Gets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @returns a userFlowApiConnectorConfiguration
     */
    public get apiConnectorConfiguration() {
        return this._apiConnectorConfiguration;
    };
    /**
     * Sets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @param value Value to set for the apiConnectorConfiguration property.
     */
    public set apiConnectorConfiguration(value: UserFlowApiConnectorConfiguration | undefined) {
        this._apiConnectorConfiguration = value;
    };
    /**
     * Instantiates a new B2xIdentityUserFlow and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.b2xIdentityUserFlow";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apiConnectorConfiguration": n => { this.apiConnectorConfiguration = n.getObjectValue<UserFlowApiConnectorConfiguration>(createUserFlowApiConnectorConfigurationFromDiscriminatorValue); },
            "identityProviders": n => { this.identityProviders = n.getCollectionOfObjectValues<IdentityProvider>(createIdentityProviderFromDiscriminatorValue); },
            "languages": n => { this.languages = n.getCollectionOfObjectValues<UserFlowLanguageConfiguration>(createUserFlowLanguageConfigurationFromDiscriminatorValue); },
            "userAttributeAssignments": n => { this.userAttributeAssignments = n.getCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>(createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue); },
            "userFlowIdentityProviders": n => { this.userFlowIdentityProviders = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the identityProviders property value. The identity providers included in the user flow.
     * @returns a identityProvider
     */
    public get identityProviders() {
        return this._identityProviders;
    };
    /**
     * Sets the identityProviders property value. The identity providers included in the user flow.
     * @param value Value to set for the identityProviders property.
     */
    public set identityProviders(value: IdentityProvider[] | undefined) {
        this._identityProviders = value;
    };
    /**
     * Gets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     * @returns a userFlowLanguageConfiguration
     */
    public get languages() {
        return this._languages;
    };
    /**
     * Sets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     * @param value Value to set for the languages property.
     */
    public set languages(value: UserFlowLanguageConfiguration[] | undefined) {
        this._languages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UserFlowApiConnectorConfiguration>("apiConnectorConfiguration", this.apiConnectorConfiguration);
        writer.writeCollectionOfObjectValues<IdentityProvider>("identityProviders", this.identityProviders);
        writer.writeCollectionOfObjectValues<UserFlowLanguageConfiguration>("languages", this.languages);
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>("userAttributeAssignments", this.userAttributeAssignments);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("userFlowIdentityProviders", this.userFlowIdentityProviders);
    };
    /**
     * Gets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
     * @returns a identityUserFlowAttributeAssignment
     */
    public get userAttributeAssignments() {
        return this._userAttributeAssignments;
    };
    /**
     * Sets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
     * @param value Value to set for the userAttributeAssignments property.
     */
    public set userAttributeAssignments(value: IdentityUserFlowAttributeAssignment[] | undefined) {
        this._userAttributeAssignments = value;
    };
    /**
     * Gets the userFlowIdentityProviders property value. The userFlowIdentityProviders property
     * @returns a identityProviderBase
     */
    public get userFlowIdentityProviders() {
        return this._userFlowIdentityProviders;
    };
    /**
     * Sets the userFlowIdentityProviders property value. The userFlowIdentityProviders property
     * @param value Value to set for the userFlowIdentityProviders property.
     */
    public set userFlowIdentityProviders(value: IdentityProviderBase[] | undefined) {
        this._userFlowIdentityProviders = value;
    };
}
