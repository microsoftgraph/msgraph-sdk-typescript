import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskDefinitionCollectionResponse} from './printTaskDefinitionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintTaskDefinitionCollectionResponse(writer: SerializationWriter, printTaskDefinitionCollectionResponse: PrintTaskDefinitionCollectionResponse | undefined = {} as PrintTaskDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printTaskDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintTaskDefinition>("value", printTaskDefinitionCollectionResponse.value, serializePrintTaskDefinition);
}
