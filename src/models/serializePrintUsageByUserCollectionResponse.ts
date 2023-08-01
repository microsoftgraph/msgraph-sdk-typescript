import type {PrintUsageByUser} from './printUsageByUser';
import type {PrintUsageByUserCollectionResponse} from './printUsageByUserCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePrintUsageByUser} from './serializePrintUsageByUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsageByUserCollectionResponse(writer: SerializationWriter, printUsageByUserCollectionResponse: PrintUsageByUserCollectionResponse | undefined = {} as PrintUsageByUserCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, printUsageByUserCollectionResponse)
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("value", printUsageByUserCollectionResponse.value, serializePrintUsageByUser);
}
