import { type AppLogCollectionRequest } from './appLogCollectionRequest';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MobileAppTroubleshootingEvent extends Entity, Parsable {
    /**
     * Indicates collection of App Log Upload Request.
     */
    appLogCollectionRequests?: AppLogCollectionRequest[] | undefined;
}
