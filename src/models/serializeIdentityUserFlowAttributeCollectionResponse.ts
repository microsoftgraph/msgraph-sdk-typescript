import type {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import type {IdentityUserFlowAttributeCollectionResponse} from './identityUserFlowAttributeCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttributeCollectionResponse(writer: SerializationWriter, identityUserFlowAttributeCollectionResponse: IdentityUserFlowAttributeCollectionResponse | undefined = {} as IdentityUserFlowAttributeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityUserFlowAttributeCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttribute>("value", identityUserFlowAttributeCollectionResponse.value, serializeIdentityUserFlowAttribute);
}
