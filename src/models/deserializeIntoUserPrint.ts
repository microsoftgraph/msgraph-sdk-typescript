import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {PrinterShare} from './printerShare';
import {serializePrinterShare} from './serializePrinterShare';
import {UserPrint} from './userPrint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserPrint(userPrint: UserPrint | undefined = {} as UserPrint) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userPrint.odataType = n.getStringValue(); },
        "recentPrinterShares": n => { userPrint.recentPrinterShares = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
    }
}
