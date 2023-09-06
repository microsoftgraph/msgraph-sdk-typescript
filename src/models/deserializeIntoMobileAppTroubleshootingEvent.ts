import { type AppLogCollectionRequest } from './appLogCollectionRequest';
import { createAppLogCollectionRequestFromDiscriminatorValue } from './createAppLogCollectionRequestFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type MobileAppTroubleshootingEvent } from './mobileAppTroubleshootingEvent';
import { serializeAppLogCollectionRequest } from './serializeAppLogCollectionRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppTroubleshootingEvent(mobileAppTroubleshootingEvent: MobileAppTroubleshootingEvent | undefined = {} as MobileAppTroubleshootingEvent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppTroubleshootingEvent),
        "appLogCollectionRequests": n => { mobileAppTroubleshootingEvent.appLogCollectionRequests = n.getCollectionOfObjectValues<AppLogCollectionRequest>(createAppLogCollectionRequestFromDiscriminatorValue); },
    }
}
