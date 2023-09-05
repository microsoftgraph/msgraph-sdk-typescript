import { createMobileAppIdentifierFromDiscriminatorValue } from './createMobileAppIdentifierFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ManagedMobileApp } from './managedMobileApp';
import { type MobileAppIdentifier } from './mobileAppIdentifier';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileApp(managedMobileApp: ManagedMobileApp | undefined = {} as ManagedMobileApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedMobileApp),
        "mobileAppIdentifier": n => { managedMobileApp.mobileAppIdentifier = n.getObjectValue<MobileAppIdentifier>(createMobileAppIdentifierFromDiscriminatorValue); },
        "version": n => { managedMobileApp.version = n.getStringValue(); },
    }
}
