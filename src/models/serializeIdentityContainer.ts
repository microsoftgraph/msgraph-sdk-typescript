import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityContainer} from './identityContainer';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {serializeB2xIdentityUserFlow} from './serializeB2xIdentityUserFlow';
import {serializeConditionalAccessRoot} from './serializeConditionalAccessRoot';
import {serializeEntity} from './serializeEntity';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityContainer(writer: SerializationWriter, identityContainer: IdentityContainer | undefined = {} as IdentityContainer) : void {
        serializeEntity(writer, identityContainer)
        writer.writeCollectionOfObjectValues<IdentityApiConnector>("apiConnectors", identityContainer.apiConnectors, serializeIdentityApiConnector);
        writer.writeCollectionOfObjectValues<B2xIdentityUserFlow>("b2xUserFlows", identityContainer.b2xUserFlows, serializeB2xIdentityUserFlow);
        writer.writeObjectValue<ConditionalAccessRoot>("conditionalAccess", identityContainer.conditionalAccess, serializeConditionalAccessRoot);
        writer.writeCollectionOfObjectValues<IdentityProviderBase>("identityProviders", identityContainer.identityProviders, serializeIdentityProviderBase);
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttribute>("userFlowAttributes", identityContainer.userFlowAttributes, serializeIdentityUserFlowAttribute);
}
