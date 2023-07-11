import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MobileAppTroubleshootingEvent} from './mobileAppTroubleshootingEvent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppTroubleshootingEventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileAppTroubleshootingEvent[] | undefined;
}
