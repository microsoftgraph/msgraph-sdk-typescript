import type {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import type {IdentityProvider} from './identityProvider';
import type {IdentityProviderBase} from './identityProviderBase';
import type {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {serializeIdentityProvider} from './serializeIdentityProvider';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeIdentityUserFlow} from './serializeIdentityUserFlow';
import {serializeIdentityUserFlowAttributeAssignment} from './serializeIdentityUserFlowAttributeAssignment';
import {serializeUserFlowApiConnectorConfiguration} from './serializeUserFlowApiConnectorConfiguration';
import {serializeUserFlowLanguageConfiguration} from './serializeUserFlowLanguageConfiguration';
import type {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import type {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeB2xIdentityUserFlow(writer: SerializationWriter, b2xIdentityUserFlow: B2xIdentityUserFlow | undefined = {} as B2xIdentityUserFlow) : void {
        serializeIdentityUserFlow(writer, b2xIdentityUserFlow)
        writer.writeObjectValue<UserFlowApiConnectorConfiguration>("apiConnectorConfiguration", b2xIdentityUserFlow.apiConnectorConfiguration, serializeUserFlowApiConnectorConfiguration);
        writer.writeCollectionOfObjectValues<IdentityProvider>("identityProviders", b2xIdentityUserFlow.identityProviders, serializeIdentityProvider);
        writer.writeCollectionOfObjectValues<UserFlowLanguageConfiguration>("languages", b2xIdentityUserFlow.languages, serializeUserFlowLanguageConfiguration);
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttributeAssignment>("userAttributeAssignments", b2xIdentityUserFlow.userAttributeAssignments, serializeIdentityUserFlowAttributeAssignment);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("userFlowIdentityProviders", b2xIdentityUserFlow.userFlowIdentityProviders, serializeIdentityProviderBase);
}
