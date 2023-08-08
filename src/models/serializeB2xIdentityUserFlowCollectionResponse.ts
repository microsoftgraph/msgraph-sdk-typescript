import type {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import type {B2xIdentityUserFlowCollectionResponse} from './b2xIdentityUserFlowCollectionResponse';
import {serializeB2xIdentityUserFlow} from './serializeB2xIdentityUserFlow';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeB2xIdentityUserFlowCollectionResponse(writer: SerializationWriter, b2xIdentityUserFlowCollectionResponse: B2xIdentityUserFlowCollectionResponse | undefined = {} as B2xIdentityUserFlowCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, b2xIdentityUserFlowCollectionResponse)
        writer.writeCollectionOfObjectValues<B2xIdentityUserFlow>("value", b2xIdentityUserFlowCollectionResponse.value, serializeB2xIdentityUserFlow);
}
