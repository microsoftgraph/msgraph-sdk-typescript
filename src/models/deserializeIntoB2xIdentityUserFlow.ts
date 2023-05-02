import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createIdentityProviderFromDiscriminatorValue} from './createIdentityProviderFromDiscriminatorValue';
import {createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue} from './createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue';
import {createUserFlowApiConnectorConfigurationFromDiscriminatorValue} from './createUserFlowApiConnectorConfigurationFromDiscriminatorValue';
import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from './createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {deserializeIntoIdentityUserFlow} from './deserializeIntoIdentityUserFlow';
import {IdentityProvider} from './identityProvider';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeIdentityUserFlowAttributeAssignment} from './serializeIdentityUserFlowAttributeAssignment';
import {serializeUserFlowApiConnectorConfiguration} from './serializeUserFlowApiConnectorConfiguration';
import {serializeUserFlowLanguageConfiguration} from './serializeUserFlowLanguageConfiguration';
import {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoB2xIdentityUserFlow(b2xIdentityUserFlow: B2xIdentityUserFlow | undefined = {} as B2xIdentityUserFlow) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityUserFlow(b2xIdentityUserFlow),
        "apiConnectorConfiguration": n => { b2xIdentityUserFlow.apiConnectorConfiguration = n.getObjectValue<UserFlowApiConnectorConfiguration>(createUserFlowApiConnectorConfigurationFromDiscriminatorValue); },
        "identityProviders": n => { b2xIdentityUserFlow.identityProviders = n.getCollectionOfObjectValues<IdentityProvider>(createIdentityProviderFromDiscriminatorValue); },
        "languages": n => { b2xIdentityUserFlow.languages = n.getCollectionOfObjectValues<UserFlowLanguageConfiguration>(createUserFlowLanguageConfigurationFromDiscriminatorValue); },
        "userAttributeAssignments": n => { b2xIdentityUserFlow.userAttributeAssignments = n.getCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>(createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue); },
        "userFlowIdentityProviders": n => { b2xIdentityUserFlow.userFlowIdentityProviders = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
    }
}
