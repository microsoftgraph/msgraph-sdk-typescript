import {AlertEvidence} from './alertEvidence';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AmazonResourceEvidence extends AlertEvidence, Parsable {
    /**
     * The unique identifier for the Amazon account.
     */
    amazonAccountId?: string | undefined;
    /**
     * The Amazon resource identifier (ARN) for the cloud resource.
     */
    amazonResourceId?: string | undefined;
    /**
     * The name of the resource.
     */
    resourceName?: string | undefined;
    /**
     * The type of the resource.
     */
    resourceType?: string | undefined;
}
