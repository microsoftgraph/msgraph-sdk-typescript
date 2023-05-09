import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {ManagedApp} from './managedApp';
import {ManagedAppAvailability} from './managedAppAvailability';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedApp(managedApp: ManagedApp | undefined = {} as ManagedApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(managedApp),
        "appAvailability": n => { managedApp.appAvailability = n.getEnumValue<ManagedAppAvailability>(ManagedAppAvailability); },
        "version": n => { managedApp.version = n.getStringValue(); },
    }
}
