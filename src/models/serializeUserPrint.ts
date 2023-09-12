import { type PrinterShare } from './printerShare';
import { serializePrinterShare } from './serializePrinterShare';
import { type UserPrint } from './userPrint';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserPrint(writer: SerializationWriter, userPrint: UserPrint | undefined = {} as UserPrint) : void {
        writer.writeStringValue("@odata.type", userPrint.odataType);
        writer.writeCollectionOfObjectValues<PrinterShare>("recentPrinterShares", userPrint.recentPrinterShares, serializePrinterShare);
        writer.writeAdditionalData(userPrint.additionalData);
}
