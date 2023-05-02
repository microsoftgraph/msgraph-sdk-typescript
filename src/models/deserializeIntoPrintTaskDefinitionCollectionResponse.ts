import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskDefinitionCollectionResponse} from './printTaskDefinitionCollectionResponse';
import {serializePrintTaskDefinition} from './serializePrintTaskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskDefinitionCollectionResponse(printTaskDefinitionCollectionResponse: PrintTaskDefinitionCollectionResponse | undefined = {} as PrintTaskDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskDefinitionCollectionResponse),
        "value": n => { printTaskDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<PrintTaskDefinition>(createPrintTaskDefinitionFromDiscriminatorValue); },
    }
}
