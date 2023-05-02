import {Group} from './group';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {serializeGroup} from './serializeGroup';
import {serializePrinter} from './serializePrinter';
import {serializePrinterBase} from './serializePrinterBase';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrinterShare(writer: SerializationWriter, printerShare: PrinterShare | undefined = {} as PrinterShare) : void {
        serializePrinterBase(writer, printerShare)
        writer.writeBooleanValue("allowAllUsers", printerShare.allowAllUsers);
        writer.writeCollectionOfObjectValues<Group>("allowedGroups", printerShare.allowedGroups, serializeGroup);
        writer.writeCollectionOfObjectValues<User>("allowedUsers", printerShare.allowedUsers, serializeUser);
        writer.writeDateValue("createdDateTime", printerShare.createdDateTime);
        writer.writeObjectValue<Printer>("printer", printerShare.printer, serializePrinter);
}
