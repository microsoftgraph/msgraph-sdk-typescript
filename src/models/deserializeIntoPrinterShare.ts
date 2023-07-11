import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createPrinterShareViewpointFromDiscriminatorValue} from './createPrinterShareViewpointFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {deserializeIntoPrinterBase} from './deserializeIntoPrinterBase';
import {Group} from './group';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {PrinterShareViewpoint} from './printerShareViewpoint';
import {serializeGroup} from './serializeGroup';
import {serializePrinter} from './serializePrinter';
import {serializePrinterShareViewpoint} from './serializePrinterShareViewpoint';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrinterShare(printerShare: PrinterShare | undefined = {} as PrinterShare) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrinterBase(printerShare),
        "allowAllUsers": n => { printerShare.allowAllUsers = n.getBooleanValue(); },
        "allowedGroups": n => { printerShare.allowedGroups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
        "allowedUsers": n => { printerShare.allowedUsers = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
        "createdDateTime": n => { printerShare.createdDateTime = n.getDateValue(); },
        "printer": n => { printerShare.printer = n.getObjectValue<Printer>(createPrinterFromDiscriminatorValue); },
        "viewPoint": n => { printerShare.viewPoint = n.getObjectValue<PrinterShareViewpoint>(createPrinterShareViewpointFromDiscriminatorValue); },
    }
}
