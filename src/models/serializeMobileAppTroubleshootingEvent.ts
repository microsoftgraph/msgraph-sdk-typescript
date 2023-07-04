import {AppLogCollectionRequest} from './appLogCollectionRequest';
import {MobileAppTroubleshootingEvent} from './mobileAppTroubleshootingEvent';
import {serializeAppLogCollectionRequest} from './serializeAppLogCollectionRequest';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppTroubleshootingEvent(writer: SerializationWriter, mobileAppTroubleshootingEvent: MobileAppTroubleshootingEvent | undefined = {} as MobileAppTroubleshootingEvent) : void {
        serializeEntity(writer, mobileAppTroubleshootingEvent)
        writer.writeCollectionOfObjectValues<AppLogCollectionRequest>("appLogCollectionRequests", mobileAppTroubleshootingEvent.appLogCollectionRequests, serializeAppLogCollectionRequest);
}
