import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeCollectionResponse} from './identityUserFlowAttributeCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttributeCollectionResponse(writer: SerializationWriter, identityUserFlowAttributeCollectionResponse: IdentityUserFlowAttributeCollectionResponse | undefined = {} as IdentityUserFlowAttributeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityUserFlowAttributeCollectionResponse)
        writer.writeCollectionOfObjectValues<IdentityUserFlowAttribute>("value", identityUserFlowAttributeCollectionResponse.value, serializeIdentityUserFlowAttribute);
}
