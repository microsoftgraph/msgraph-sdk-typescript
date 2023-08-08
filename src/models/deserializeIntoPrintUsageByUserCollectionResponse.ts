import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {PrintUsageByUser} from './printUsageByUser';
import type {PrintUsageByUserCollectionResponse} from './printUsageByUserCollectionResponse';
import {serializePrintUsageByUser} from './serializePrintUsageByUser';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByUserCollectionResponse(printUsageByUserCollectionResponse: PrintUsageByUserCollectionResponse | undefined = {} as PrintUsageByUserCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printUsageByUserCollectionResponse),
        "value": n => { printUsageByUserCollectionResponse.value = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
    }
}
