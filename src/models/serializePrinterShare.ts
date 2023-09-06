import { type Group } from './group';
import { type Printer } from './printer';
import { type PrinterShare } from './printerShare';
import { type PrinterShareViewpoint } from './printerShareViewpoint';
import { serializeGroup } from './serializeGroup';
import { serializePrinter } from './serializePrinter';
import { serializePrinterBase } from './serializePrinterBase';
import { serializePrinterShareViewpoint } from './serializePrinterShareViewpoint';
import { serializeUser } from './serializeUser';
import { type User } from './user';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrinterShare(writer: SerializationWriter, printerShare: PrinterShare | undefined = {} as PrinterShare) : void {
        serializePrinterBase(writer, printerShare)
        writer.writeBooleanValue("allowAllUsers", printerShare.allowAllUsers);
        writer.writeCollectionOfObjectValues<Group>("allowedGroups", printerShare.allowedGroups, serializeGroup);
        writer.writeCollectionOfObjectValues<User>("allowedUsers", printerShare.allowedUsers, serializeUser);
        writer.writeDateValue("createdDateTime", printerShare.createdDateTime);
        writer.writeObjectValue<Printer>("printer", printerShare.printer, serializePrinter);
        writer.writeObjectValue<PrinterShareViewpoint>("viewPoint", printerShare.viewPoint, serializePrinterShareViewpoint);
}
