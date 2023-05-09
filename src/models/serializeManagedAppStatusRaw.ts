import {Json} from './json';
import {ManagedAppStatusRaw} from './managedAppStatusRaw';
import {serializeJson} from './serializeJson';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatusRaw(writer: SerializationWriter, managedAppStatusRaw: ManagedAppStatusRaw | undefined = {} as ManagedAppStatusRaw) : void {
        serializeManagedAppStatus(writer, managedAppStatusRaw)
        writer.writeObjectValue<Json>("content", managedAppStatusRaw.content, serializeJson);
}
