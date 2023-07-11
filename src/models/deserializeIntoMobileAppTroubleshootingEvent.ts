import {AppLogCollectionRequest} from './appLogCollectionRequest';
import {createAppLogCollectionRequestFromDiscriminatorValue} from './createAppLogCollectionRequestFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileAppTroubleshootingEvent} from './mobileAppTroubleshootingEvent';
import {serializeAppLogCollectionRequest} from './serializeAppLogCollectionRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppTroubleshootingEvent(mobileAppTroubleshootingEvent: MobileAppTroubleshootingEvent | undefined = {} as MobileAppTroubleshootingEvent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppTroubleshootingEvent),
        "appLogCollectionRequests": n => { mobileAppTroubleshootingEvent.appLogCollectionRequests = n.getCollectionOfObjectValues<AppLogCollectionRequest>(createAppLogCollectionRequestFromDiscriminatorValue); },
    }
}
