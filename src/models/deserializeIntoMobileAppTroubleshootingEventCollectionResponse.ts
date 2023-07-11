import {createMobileAppTroubleshootingEventFromDiscriminatorValue} from './createMobileAppTroubleshootingEventFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {MobileAppTroubleshootingEvent} from './mobileAppTroubleshootingEvent';
import {MobileAppTroubleshootingEventCollectionResponse} from './mobileAppTroubleshootingEventCollectionResponse';
import {serializeMobileAppTroubleshootingEvent} from './serializeMobileAppTroubleshootingEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppTroubleshootingEventCollectionResponse(mobileAppTroubleshootingEventCollectionResponse: MobileAppTroubleshootingEventCollectionResponse | undefined = {} as MobileAppTroubleshootingEventCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileAppTroubleshootingEventCollectionResponse),
        "value": n => { mobileAppTroubleshootingEventCollectionResponse.value = n.getCollectionOfObjectValues<MobileAppTroubleshootingEvent>(createMobileAppTroubleshootingEventFromDiscriminatorValue); },
    }
}
