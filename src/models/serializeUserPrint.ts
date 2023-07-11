import {PrinterShare} from './printerShare';
import {serializePrinterShare} from './serializePrinterShare';
import {UserPrint} from './userPrint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserPrint(writer: SerializationWriter, userPrint: UserPrint | undefined = {} as UserPrint) : void {
        writer.writeStringValue("@odata.type", userPrint.odataType);
        writer.writeCollectionOfObjectValues<PrinterShare>("recentPrinterShares", userPrint.recentPrinterShares, serializePrinterShare);
        writer.writeAdditionalData(userPrint.additionalData);
}
