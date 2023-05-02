import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedMobileApp} from './managedMobileApp';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileApp(managedMobileApp: ManagedMobileApp | undefined = {} as ManagedMobileApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedMobileApp),
        "mobileAppIdentifier": n => { managedMobileApp.mobileAppIdentifier = n.getObjectValue<MobileAppIdentifier>(createMobileAppIdentifierFromDiscriminatorValue); },
        "version": n => { managedMobileApp.version = n.getStringValue(); },
    }
}
