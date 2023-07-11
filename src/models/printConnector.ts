import {Entity} from './entity';
import {PrinterLocation} from './printerLocation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintConnector extends Entity, Parsable {
    /**
     * The connector's version.
     */
    appVersion?: string | undefined;
    /**
     * The name of the connector.
     */
    displayName?: string | undefined;
    /**
     * The connector machine's hostname.
     */
    fullyQualifiedDomainName?: string | undefined;
    /**
     * The physical and/or organizational location of the connector.
     */
    location?: PrinterLocation | undefined;
    /**
     * The connector machine's operating system version.
     */
    operatingSystem?: string | undefined;
    /**
     * The DateTimeOffset when the connector was registered.
     */
    registeredDateTime?: Date | undefined;
}
