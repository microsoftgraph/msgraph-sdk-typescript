import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeCollectionResponse} from './identityUserFlowAttributeCollectionResponse';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttributeCollectionResponse(identityUserFlowAttributeCollectionResponse: IdentityUserFlowAttributeCollectionResponse | undefined = {} as IdentityUserFlowAttributeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(identityUserFlowAttributeCollectionResponse),
        "value": n => { identityUserFlowAttributeCollectionResponse.value = n.getCollectionOfObjectValues<IdentityUserFlowAttribute>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
    }
}
