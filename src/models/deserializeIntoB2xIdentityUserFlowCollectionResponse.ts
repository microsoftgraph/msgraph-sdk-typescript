import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {B2xIdentityUserFlowCollectionResponse} from './b2xIdentityUserFlowCollectionResponse';
import {createB2xIdentityUserFlowFromDiscriminatorValue} from './createB2xIdentityUserFlowFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeB2xIdentityUserFlow} from './serializeB2xIdentityUserFlow';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoB2xIdentityUserFlowCollectionResponse(b2xIdentityUserFlowCollectionResponse: B2xIdentityUserFlowCollectionResponse | undefined = {} as B2xIdentityUserFlowCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(b2xIdentityUserFlowCollectionResponse),
        "value": n => { b2xIdentityUserFlowCollectionResponse.value = n.getCollectionOfObjectValues<B2xIdentityUserFlow>(createB2xIdentityUserFlowFromDiscriminatorValue); },
    }
}
