import { createIdentityUserFlowAttributeFromDiscriminatorValue } from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IdentityUserFlowAttribute } from './identityUserFlowAttribute';
import { type IdentityUserFlowAttributeCollectionResponse } from './identityUserFlowAttributeCollectionResponse';
import { serializeIdentityUserFlowAttribute } from './serializeIdentityUserFlowAttribute';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttributeCollectionResponse(identityUserFlowAttributeCollectionResponse: IdentityUserFlowAttributeCollectionResponse | undefined = {} as IdentityUserFlowAttributeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityUserFlowAttributeCollectionResponse),
        "value": n => { identityUserFlowAttributeCollectionResponse.value = n.getCollectionOfObjectValues<IdentityUserFlowAttribute>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
    }
}
