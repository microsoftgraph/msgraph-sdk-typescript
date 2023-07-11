import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UrlEvidence extends AlertEvidence, Parsable {
    /**
     * The Unique Resource Locator (URL).
     */
    url?: string | undefined;
}
