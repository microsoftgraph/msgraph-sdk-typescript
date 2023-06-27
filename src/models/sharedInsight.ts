import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {SharingDetail} from './sharingDetail';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedInsight extends Entity, Parsable {
    /**
     * Details about the shared item. Read only.
     */
    lastShared?: SharingDetail | undefined;
    /**
     * The lastSharedMethod property
     */
    lastSharedMethod?: Entity | undefined;
    /**
     * Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem.
     */
    resource?: Entity | undefined;
    /**
     * Reference properties of the shared document, such as the url and type of the document. Read-only
     */
    resourceReference?: ResourceReference | undefined;
    /**
     * Properties that you can use to visualize the document in your experience. Read-only
     */
    resourceVisualization?: ResourceVisualization | undefined;
    /**
     * The sharingHistory property
     */
    sharingHistory?: SharingDetail[] | undefined;
}
