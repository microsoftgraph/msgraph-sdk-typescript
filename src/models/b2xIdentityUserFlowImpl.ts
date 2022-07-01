import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createIdentityProviderFromDiscriminatorValue} from './createIdentityProviderFromDiscriminatorValue';
import {createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue} from './createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue';
import {createUserFlowApiConnectorConfigurationFromDiscriminatorValue} from './createUserFlowApiConnectorConfigurationFromDiscriminatorValue';
import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from './createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {IdentityProvider} from './identityProvider';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {IdentityProviderBaseImpl, IdentityProviderImpl, IdentityUserFlowAttributeAssignmentImpl, IdentityUserFlowImpl, UserFlowApiConnectorConfigurationImpl, UserFlowLanguageConfigurationImpl} from './index';
import {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class B2xIdentityUserFlowImpl extends IdentityUserFlowImpl implements B2xIdentityUserFlow {
    /** Configuration for enabling an API connector for use as part of the self-service sign up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration. */
    private _apiConnectorConfiguration?: UserFlowApiConnectorConfiguration | undefined;
    /** The identity providers included in the user flow. */
    private _identityProviders?: IdentityProvider[] | undefined;
    /** The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows. */
    private _languages?: UserFlowLanguageConfiguration[] | undefined;
    /** The user attribute assignments included in the user flow. */
    private _userAttributeAssignments?: IdentityUserFlowAttributeAssignment[] | undefined;
    /** The userFlowIdentityProviders property */
    private _userFlowIdentityProviders?: IdentityProviderBase[] | undefined;
    /**
     * Gets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @returns a UserFlowApiConnectorConfigurationInterface
     */
    public get apiConnectorConfiguration() {
        return this._apiConnectorConfiguration;
    };
    /**
     * Sets the apiConnectorConfiguration property value. Configuration for enabling an API connector for use as part of the self-service sign up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     * @param value Value to set for the apiConnectorConfiguration property.
     */
    public set apiConnectorConfiguration(value: UserFlowApiConnectorConfiguration | undefined) {
        if(value) {
            this._apiConnectorConfiguration = value instanceof UserFlowApiConnectorConfigurationImpl? value as UserFlowApiConnectorConfigurationImpl: new UserFlowApiConnectorConfigurationImpl(value);
        }
    };
    /**
     * Instantiates a new B2xIdentityUserFlow and sets the default values.
     * @param b2xIdentityUserFlowParameterValue 
     */
    public constructor(b2xIdentityUserFlowParameterValue?: B2xIdentityUserFlow | undefined) {
        super(b2xIdentityUserFlowParameterValue);
        this._apiConnectorConfiguration = b2xIdentityUserFlowParameterValue?.apiConnectorConfiguration;
        this._identityProviders = b2xIdentityUserFlowParameterValue?.identityProviders;
        this._languages = b2xIdentityUserFlowParameterValue?.languages;
        this._userAttributeAssignments = b2xIdentityUserFlowParameterValue?.userAttributeAssignments;
        this._userFlowIdentityProviders = b2xIdentityUserFlowParameterValue?.userFlowIdentityProviders;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apiConnectorConfiguration": n => { this.apiConnectorConfiguration = n.getObjectValue<UserFlowApiConnectorConfigurationImpl>(createUserFlowApiConnectorConfigurationFromDiscriminatorValue); },
            "identityProviders": n => { this.identityProviders = n.getCollectionOfObjectValues<IdentityProviderImpl>(createIdentityProviderFromDiscriminatorValue); },
            "languages": n => { this.languages = n.getCollectionOfObjectValues<UserFlowLanguageConfigurationImpl>(createUserFlowLanguageConfigurationFromDiscriminatorValue); },
            "userAttributeAssignments": n => { this.userAttributeAssignments = n.getCollectionOfObjectValues<IdentityUserFlowAttributeAssignmentImpl>(createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue); },
            "userFlowIdentityProviders": n => { this.userFlowIdentityProviders = n.getCollectionOfObjectValues<IdentityProviderBaseImpl>(createIdentityProviderBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the identityProviders property value. The identity providers included in the user flow.
     * @returns a IdentityProviderInterface
     */
    public get identityProviders() {
        return this._identityProviders;
    };
    /**
     * Sets the identityProviders property value. The identity providers included in the user flow.
     * @param value Value to set for the identityProviders property.
     */
    public set identityProviders(value: IdentityProvider[] | undefined) {
        if(value) {
            const identityProvidersArrValue: IdentityProviderImpl[] = [];
            this.identityProviders?.forEach(element => {
                identityProvidersArrValue.push((element instanceof IdentityProviderImpl? element as IdentityProviderImpl:new IdentityProviderImpl(element)));
            });
            this._identityProviders = identityProvidersArrValue;
        }
    };
    /**
     * Gets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.
     * @returns a UserFlowLanguageConfigurationInterface
     */
    public get languages() {
        return this._languages;
    };
    /**
     * Sets the languages property value. The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.
     * @param value Value to set for the languages property.
     */
    public set languages(value: UserFlowLanguageConfiguration[] | undefined) {
        if(value) {
            const languagesArrValue: UserFlowLanguageConfigurationImpl[] = [];
            this.languages?.forEach(element => {
                languagesArrValue.push((element instanceof UserFlowLanguageConfigurationImpl? element as UserFlowLanguageConfigurationImpl:new UserFlowLanguageConfigurationImpl(element)));
            });
            this._languages = languagesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apiConnectorConfiguration){
            writer.writeObjectValue<UserFlowApiConnectorConfigurationImpl>("apiConnectorConfiguration", (this.apiConnectorConfiguration instanceof UserFlowApiConnectorConfigurationImpl? this.apiConnectorConfiguration as UserFlowApiConnectorConfigurationImpl: new UserFlowApiConnectorConfigurationImpl(this.apiConnectorConfiguration)));
        }
        if(this.identityProviders && this.identityProviders.length != 0){        const identityProvidersArrValue: IdentityProviderImpl[] = [];
        this.identityProviders?.forEach(element => {
            identityProvidersArrValue.push((element instanceof IdentityProviderImpl? element as IdentityProviderImpl:new IdentityProviderImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentityProviderImpl>("identityProviders", identityProvidersArrValue);
        }
        if(this.languages && this.languages.length != 0){        const languagesArrValue: UserFlowLanguageConfigurationImpl[] = [];
        this.languages?.forEach(element => {
            languagesArrValue.push((element instanceof UserFlowLanguageConfigurationImpl? element as UserFlowLanguageConfigurationImpl:new UserFlowLanguageConfigurationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserFlowLanguageConfigurationImpl>("languages", languagesArrValue);
        }
        if(this.userAttributeAssignments && this.userAttributeAssignments.length != 0){        const userAttributeAssignmentsArrValue: IdentityUserFlowAttributeAssignmentImpl[] = [];
        this.userAttributeAssignments?.forEach(element => {
            userAttributeAssignmentsArrValue.push((element instanceof IdentityUserFlowAttributeAssignmentImpl? element as IdentityUserFlowAttributeAssignmentImpl:new IdentityUserFlowAttributeAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeAssignmentImpl>("userAttributeAssignments", userAttributeAssignmentsArrValue);
        }
        if(this.userFlowIdentityProviders && this.userFlowIdentityProviders.length != 0){        const userFlowIdentityProvidersArrValue: IdentityProviderBaseImpl[] = [];
        this.userFlowIdentityProviders?.forEach(element => {
            userFlowIdentityProvidersArrValue.push((element instanceof IdentityProviderBaseImpl? element as IdentityProviderBaseImpl:new IdentityProviderBaseImpl(element)));
        });
            writer.writeCollectionOfObjectValues<IdentityProviderBaseImpl>("userFlowIdentityProviders", userFlowIdentityProvidersArrValue);
        }
    };
    /**
     * Gets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
     * @returns a IdentityUserFlowAttributeAssignmentInterface
     */
    public get userAttributeAssignments() {
        return this._userAttributeAssignments;
    };
    /**
     * Sets the userAttributeAssignments property value. The user attribute assignments included in the user flow.
     * @param value Value to set for the userAttributeAssignments property.
     */
    public set userAttributeAssignments(value: IdentityUserFlowAttributeAssignment[] | undefined) {
        if(value) {
            const userAttributeAssignmentsArrValue: IdentityUserFlowAttributeAssignmentImpl[] = [];
            this.userAttributeAssignments?.forEach(element => {
                userAttributeAssignmentsArrValue.push((element instanceof IdentityUserFlowAttributeAssignmentImpl? element as IdentityUserFlowAttributeAssignmentImpl:new IdentityUserFlowAttributeAssignmentImpl(element)));
            });
            this._userAttributeAssignments = userAttributeAssignmentsArrValue;
        }
    };
    /**
     * Gets the userFlowIdentityProviders property value. The userFlowIdentityProviders property
     * @returns a IdentityProviderBaseInterface
     */
    public get userFlowIdentityProviders() {
        return this._userFlowIdentityProviders;
    };
    /**
     * Sets the userFlowIdentityProviders property value. The userFlowIdentityProviders property
     * @param value Value to set for the userFlowIdentityProviders property.
     */
    public set userFlowIdentityProviders(value: IdentityProviderBase[] | undefined) {
        if(value) {
            const userFlowIdentityProvidersArrValue: IdentityProviderBaseImpl[] = [];
            this.userFlowIdentityProviders?.forEach(element => {
                userFlowIdentityProvidersArrValue.push((element instanceof IdentityProviderBaseImpl? element as IdentityProviderBaseImpl:new IdentityProviderBaseImpl(element)));
            });
            this._userFlowIdentityProviders = userFlowIdentityProvidersArrValue;
        }
    };
}
