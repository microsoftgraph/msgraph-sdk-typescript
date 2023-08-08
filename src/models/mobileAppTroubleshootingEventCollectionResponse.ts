import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {MobileAppTroubleshootingEvent} from './mobileAppTroubleshootingEvent';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppTroubleshootingEventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileAppTroubleshootingEvent[] | undefined;
}
