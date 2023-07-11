import {AppLogCollectionRequest} from './appLogCollectionRequest';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppTroubleshootingEvent extends Entity, Parsable {
    /**
     * Indicates collection of App Log Upload Request.
     */
    appLogCollectionRequests?: AppLogCollectionRequest[] | undefined;
}
