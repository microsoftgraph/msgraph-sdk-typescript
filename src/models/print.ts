import type {PrintConnector} from './printConnector';
import type {PrintOperation} from './printOperation';
import type {PrintService} from './printService';
import type {PrintSettings} from './printSettings';
import type {PrintTaskDefinition} from './printTaskDefinition';
import type {Printer} from './printer';
import type {PrinterShare} from './printerShare';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Print extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The list of available print connectors.
     */
    connectors?: PrintConnector[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The list of print long running operations.
     */
    operations?: PrintOperation[] | undefined;
    /**
     * The list of printers registered in the tenant.
     */
    printers?: Printer[] | undefined;
    /**
     * The list of available Universal Print service endpoints.
     */
    services?: PrintService[] | undefined;
    /**
     * Tenant-wide settings for the Universal Print service.
     */
    settings?: PrintSettings | undefined;
    /**
     * The list of printer shares registered in the tenant.
     */
    shares?: PrinterShare[] | undefined;
    /**
     * List of abstract definition for a task that can be triggered when various events occur within Universal Print.
     */
    taskDefinitions?: PrintTaskDefinition[] | undefined;
}
