import { type AlertEvidence } from './alertEvidence';
import { type AzureResourceEvidence } from './azureResourceEvidence';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface BlobContainerEvidence extends AlertEvidence, Parsable {
    /**
     * The name of the blob container.
     */
    name?: string | undefined;
    /**
     * The storage which the blob container belongs to.
     */
    storageResource?: AzureResourceEvidence | undefined;
    /**
     * The full URL representation of the blob container.
     */
    url?: string | undefined;
}
