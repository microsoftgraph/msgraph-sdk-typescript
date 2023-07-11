import {AutonomousSystem} from './autonomousSystem';
import {Host} from './host';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IpAddress extends Host, Parsable {
    /**
     * The details about the autonomous system to which this IP address belongs.
     */
    autonomousSystem?: AutonomousSystem | undefined;
    /**
     * The country or region for this IP address.
     */
    countryOrRegion?: string | undefined;
    /**
     * The hosting company listed for this host.
     */
    hostingProvider?: string | undefined;
    /**
     * The block of IP addresses this IP address belongs to.
     */
    netblock?: string | undefined;
}
