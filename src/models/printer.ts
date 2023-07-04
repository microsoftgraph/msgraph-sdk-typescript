import {PrintConnector} from './printConnector';
import {PrinterBase} from './printerBase';
import {PrinterShare} from './printerShare';
import {PrintTaskTrigger} from './printTaskTrigger';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Printer extends Parsable, PrinterBase {
    /**
     * The connectors that are associated with the printer.
     */
    connectors?: PrintConnector[] | undefined;
    /**
     * True if the printer has a physical device for printing. Read-only.
     */
    hasPhysicalDevice?: boolean | undefined;
    /**
     * True if the printer is shared; false otherwise. Read-only.
     */
    isShared?: boolean | undefined;
    /**
     * The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
     */
    lastSeenDateTime?: Date | undefined;
    /**
     * The DateTimeOffset when the printer was registered. Read-only.
     */
    registeredDateTime?: Date | undefined;
    /**
     * The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.
     */
    shares?: PrinterShare[] | undefined;
    /**
     * A list of task triggers that are associated with the printer.
     */
    taskTriggers?: PrintTaskTrigger[] | undefined;
}
