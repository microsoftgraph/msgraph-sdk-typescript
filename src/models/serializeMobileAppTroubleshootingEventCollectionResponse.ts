import {MobileAppTroubleshootingEvent} from './mobileAppTroubleshootingEvent';
import {MobileAppTroubleshootingEventCollectionResponse} from './mobileAppTroubleshootingEventCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileAppTroubleshootingEvent} from './serializeMobileAppTroubleshootingEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileAppTroubleshootingEventCollectionResponse(writer: SerializationWriter, mobileAppTroubleshootingEventCollectionResponse: MobileAppTroubleshootingEventCollectionResponse | undefined = {} as MobileAppTroubleshootingEventCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileAppTroubleshootingEventCollectionResponse)
        writer.writeCollectionOfObjectValues<MobileAppTroubleshootingEvent>("value", mobileAppTroubleshootingEventCollectionResponse.value, serializeMobileAppTroubleshootingEvent);
}
