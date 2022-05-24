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

/** Provides operations to manage the identityContainer singleton. */
export class B2xIdentityUserFlowImpl extends IdentityUserFlowImpl implements B2xIdentityUserFlow, Parsable {
    /** Configuration for enabling an API connector for use as part of the self-service sign up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration. */
    public apiConnectorConfiguration?: UserFlowApiConnectorConfiguration | undefined;
    /** The identity providers included in the user flow. */
    public identityProviders?: IdentityProvider[] | undefined;
    /** The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows. */
    public languages?: UserFlowLanguageConfiguration[] | undefined;
    /** The user attribute assignments included in the user flow. */
    public userAttributeAssignments?: IdentityUserFlowAttributeAssignment[] | undefined;
    /** The userFlowIdentityProviders property */
    public userFlowIdentityProviders?: IdentityProviderBase[] | undefined;
    /**
     * Instantiates a new b2xIdentityUserFlow and sets the default values.
     * @param b2xIdentityUserFlowParameterValue 
     */
    public constructor(b2xIdentityUserFlowParameterValue?: B2xIdentityUserFlow | undefined) {
        super();
        this.apiConnectorConfiguration = b2xIdentityUserFlowParameterValue?.apiConnectorConfiguration ;
        this.identityProviders = b2xIdentityUserFlowParameterValue?.identityProviders ;
        this.languages = b2xIdentityUserFlowParameterValue?.languages ;
        this.userAttributeAssignments = b2xIdentityUserFlowParameterValue?.userAttributeAssignments ;
        this.userFlowIdentityProviders = b2xIdentityUserFlowParameterValue?.userFlowIdentityProviders ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apiConnectorConfiguration){
        writer.writeObjectValue<UserFlowApiConnectorConfigurationImpl>("apiConnectorConfiguration", new UserFlowApiConnectorConfigurationImpl(this.apiConnectorConfiguration));
        }
        if(this.identityProviders && this.identityProviders.length != 0){        const identityProvidersArrValue: IdentityProviderImpl[] = []; this.identityProviders?.forEach(element => {identityProvidersArrValue.push(new IdentityProviderImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityProviderImpl>("identityProviders", identityProvidersArrValue);
        }
        if(this.languages && this.languages.length != 0){        const languagesArrValue: UserFlowLanguageConfigurationImpl[] = []; this.languages?.forEach(element => {languagesArrValue.push(new UserFlowLanguageConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<UserFlowLanguageConfigurationImpl>("languages", languagesArrValue);
        }
        if(this.userAttributeAssignments && this.userAttributeAssignments.length != 0){        const userAttributeAssignmentsArrValue: IdentityUserFlowAttributeAssignmentImpl[] = []; this.userAttributeAssignments?.forEach(element => {userAttributeAssignmentsArrValue.push(new IdentityUserFlowAttributeAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeAssignmentImpl>("userAttributeAssignments", userAttributeAssignmentsArrValue);
        }
        if(this.userFlowIdentityProviders && this.userFlowIdentityProviders.length != 0){        const userFlowIdentityProvidersArrValue: IdentityProviderBaseImpl[] = []; this.userFlowIdentityProviders?.forEach(element => {userFlowIdentityProvidersArrValue.push(new IdentityProviderBaseImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityProviderBaseImpl>("userFlowIdentityProviders", userFlowIdentityProvidersArrValue);
        }
    };
}
