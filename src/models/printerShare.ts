import {Group} from './group';
import {Printer} from './printer';
import {PrinterBase} from './printerBase';
import {User} from './user';

export interface PrinterShare extends PrinterBase{
    /** If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties. */
    allowAllUsers?:boolean | undefined;
    /** The groups whose users have access to print using the printer. */
    allowedGroups?:Group[] | undefined;
    /** The users who have access to print using the printer. */
    allowedUsers?:User[] | undefined;
    /** The DateTimeOffset when the printer share was created. Read-only. */
    createdDateTime?:Date | undefined;
    /** The printer that this printer share is related to. */
    printer?:Printer | undefined;
}
