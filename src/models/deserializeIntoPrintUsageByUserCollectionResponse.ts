import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PrintUsageByUser} from './printUsageByUser';
import {PrintUsageByUserCollectionResponse} from './printUsageByUserCollectionResponse';
import {serializePrintUsageByUser} from './serializePrintUsageByUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByUserCollectionResponse(printUsageByUserCollectionResponse: PrintUsageByUserCollectionResponse | undefined = {} as PrintUsageByUserCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printUsageByUserCollectionResponse),
        "value": n => { printUsageByUserCollectionResponse.value = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
    }
}
