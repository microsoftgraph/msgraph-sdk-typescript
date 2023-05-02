import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from './createB2xIdentityUserFlowFromDiscriminatorValue';
import {createConditionalAccessRootFromDiscriminatorValue} from './createConditionalAccessRootFromDiscriminatorValue';
import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityContainer} from './identityContainer';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {serializeB2xIdentityUserFlow} from './serializeB2xIdentityUserFlow';
import {serializeConditionalAccessRoot} from './serializeConditionalAccessRoot';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityContainer(identityContainer: IdentityContainer | undefined = {} as IdentityContainer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityContainer),
        "apiConnectors": n => { identityContainer.apiConnectors = n.getCollectionOfObjectValues<IdentityApiConnector>(createIdentityApiConnectorFromDiscriminatorValue); },
        "b2xUserFlows": n => { identityContainer.b2xUserFlows = n.getCollectionOfObjectValues<B2xIdentityUserFlow>(createB2xIdentityUserFlowFromDiscriminatorValue); },
        "conditionalAccess": n => { identityContainer.conditionalAccess = n.getObjectValue<ConditionalAccessRoot>(createConditionalAccessRootFromDiscriminatorValue); },
        "identityProviders": n => { identityContainer.identityProviders = n.getCollectionOfObjectValues<IdentityProviderBase>(createIdentityProviderBaseFromDiscriminatorValue); },
        "userFlowAttributes": n => { identityContainer.userFlowAttributes = n.getCollectionOfObjectValues<IdentityUserFlowAttribute>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
    }
}
