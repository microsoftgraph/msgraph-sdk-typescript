import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AzureResourceEvidence extends AlertEvidence, Parsable {
    /**
     * The unique identifier for the Azure resource.
     */
    resourceId?: string | undefined;
    /**
     * The name of the resource.
     */
    resourceName?: string | undefined;
    /**
     * The type of the resource.
     */
    resourceType?: string | undefined;
}
