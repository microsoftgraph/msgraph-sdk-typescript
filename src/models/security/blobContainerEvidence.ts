import {AlertEvidence} from './alertEvidence';
import {AzureResourceEvidence} from './azureResourceEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BlobContainerEvidence extends AlertEvidence, Parsable {
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The storageResource property
     */
    storageResource?: AzureResourceEvidence | undefined;
    /**
     * The url property
     */
    url?: string | undefined;
}
