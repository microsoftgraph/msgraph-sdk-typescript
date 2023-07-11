import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IpEvidence extends AlertEvidence, Parsable {
    /**
     * The two-letter country code according to ISO 3166 format, for example: US, UK, CA, etc..).
     */
    countryLetterCode?: string | undefined;
    /**
     * The value of the IP Address, can be either in V4 address or V6 address format.
     */
    ipAddress?: string | undefined;
}
