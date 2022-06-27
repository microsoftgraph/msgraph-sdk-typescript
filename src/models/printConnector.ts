import {Entity} from './entity';
import {PrinterLocation} from './printerLocation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintConnector extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The connector's version. */
    appVersion?: string | undefined;
    /** The name of the connector. */
    displayName?: string | undefined;
    /** The connector machine's hostname. */
    fullyQualifiedDomainName?: string | undefined;
    /** The physical and/or organizational location of the connector. */
    location?: PrinterLocation | undefined;
    /** The connector machine's operating system version. */
    operatingSystem?: string | undefined;
    /** The DateTimeOffset when the connector was registered. */
    registeredDateTime?: Date | undefined;
}
