import { type PrintTaskDefinition } from './printTaskDefinition';
import { type PrintTaskDefinitionCollectionResponse } from './printTaskDefinitionCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializePrintTaskDefinition } from './serializePrintTaskDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrintTaskDefinitionCollectionResponse(writer: SerializationWriter, printTaskDefinitionCollectionResponse: PrintTaskDefinitionCollectionResponse | undefined = {} as PrintTaskDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printTaskDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintTaskDefinition>("value", printTaskDefinitionCollectionResponse.value, serializePrintTaskDefinition);
}
