import { type AlertEvidence } from './alertEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UrlEvidence extends AlertEvidence, Parsable {
    /**
     * The Unique Resource Locator (URL).
     */
    url?: string | undefined;
}
