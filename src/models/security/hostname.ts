import {Host} from './host';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Hostname extends Host, Parsable {
    /**
     * The company or individual who registered this hostname, from WHOIS data.
     */
    registrant?: string | undefined;
    /**
     * The registrar for this hostname, from WHOIS data.
     */
    registrar?: string | undefined;
}
