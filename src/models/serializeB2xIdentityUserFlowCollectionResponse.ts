import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {B2xIdentityUserFlowCollectionResponse} from './b2xIdentityUserFlowCollectionResponse';
import {serializeB2xIdentityUserFlow} from './serializeB2xIdentityUserFlow';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeB2xIdentityUserFlowCollectionResponse(b2xIdentityUserFlowCollectionResponse: B2xIdentityUserFlowCollectionResponse | undefined = {} as B2xIdentityUserFlowCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, b2xIdentityUserFlowCollectionResponse)
        writer.writeCollectionOfObjectValues<B2xIdentityUserFlow>("value", b2xIdentityUserFlowCollectionResponse.value, serializeB2xIdentityUserFlow);
}
