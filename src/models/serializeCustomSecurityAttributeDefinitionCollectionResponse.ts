import { type CustomSecurityAttributeDefinition } from './customSecurityAttributeDefinition';
import { type CustomSecurityAttributeDefinitionCollectionResponse } from './customSecurityAttributeDefinitionCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeCustomSecurityAttributeDefinition } from './serializeCustomSecurityAttributeDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomSecurityAttributeDefinitionCollectionResponse(writer: SerializationWriter, customSecurityAttributeDefinitionCollectionResponse: CustomSecurityAttributeDefinitionCollectionResponse | undefined = {} as CustomSecurityAttributeDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, customSecurityAttributeDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<CustomSecurityAttributeDefinition>("value", customSecurityAttributeDefinitionCollectionResponse.value, serializeCustomSecurityAttributeDefinition);
}
