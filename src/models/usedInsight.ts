import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {UsageDetails} from './usageDetails';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UsedInsight extends Entity, Parsable {
    /**
     * Information about when the item was last viewed or modified by the user. Read only.
     */
    lastUsed?: UsageDetails | undefined;
    /**
     * Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     */
    resource?: Entity | undefined;
    /**
     * Reference properties of the used document, such as the url and type of the document. Read-only
     */
    resourceReference?: ResourceReference | undefined;
    /**
     * Properties that you can use to visualize the document in your experience. Read-only
     */
    resourceVisualization?: ResourceVisualization | undefined;
}
