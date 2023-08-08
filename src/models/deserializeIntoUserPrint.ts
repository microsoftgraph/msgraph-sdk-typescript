import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import type {PrinterShare} from './printerShare';
import {serializePrinterShare} from './serializePrinterShare';
import type {UserPrint} from './userPrint';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserPrint(userPrint: UserPrint | undefined = {} as UserPrint) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userPrint.odataType = n.getStringValue(); },
        "recentPrinterShares": n => { userPrint.recentPrinterShares = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
    }
}
