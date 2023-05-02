import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {deserializeIntoManagedAppStatus} from './deserializeIntoManagedAppStatus';
import {Json} from './json';
import {ManagedAppStatusRaw} from './managedAppStatusRaw';
import {serializeJson} from './serializeJson';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatusRaw(managedAppStatusRaw: ManagedAppStatusRaw | undefined = {} as ManagedAppStatusRaw) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppStatus(managedAppStatusRaw),
        "content": n => { managedAppStatusRaw.content = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
