import { type AppLogCollectionRequest } from './appLogCollectionRequest';
import { type MobileAppTroubleshootingEvent } from './mobileAppTroubleshootingEvent';
import { serializeAppLogCollectionRequest } from './serializeAppLogCollectionRequest';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMobileAppTroubleshootingEvent(writer: SerializationWriter, mobileAppTroubleshootingEvent: MobileAppTroubleshootingEvent | undefined = {} as MobileAppTroubleshootingEvent) : void {
        serializeEntity(writer, mobileAppTroubleshootingEvent)
        writer.writeCollectionOfObjectValues<AppLogCollectionRequest>("appLogCollectionRequests", mobileAppTroubleshootingEvent.appLogCollectionRequests, serializeAppLogCollectionRequest);
}
