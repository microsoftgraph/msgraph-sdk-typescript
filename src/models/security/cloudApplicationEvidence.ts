import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CloudApplicationEvidence extends AlertEvidence, Parsable {
    /**
     * Unique identifier of the application.
     */
    appId?: number | undefined;
    /**
     * Name of the application.
     */
    displayName?: string | undefined;
    /**
     * Identifier of the instance of the Software as a Service (SaaS) application.
     */
    instanceId?: number | undefined;
    /**
     * Name of the instance of the SaaS application.
     */
    instanceName?: string | undefined;
    /**
     * The identifier of the SaaS application.
     */
    saasAppId?: number | undefined;
}
