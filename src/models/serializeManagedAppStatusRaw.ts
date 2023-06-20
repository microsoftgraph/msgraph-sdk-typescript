import {Json} from './json';
import {ManagedAppStatusRaw} from './managedAppStatusRaw';
import {serializeJson} from './serializeJson';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatusRaw(managedAppStatusRaw: ManagedAppStatusRaw | undefined = {} as ManagedAppStatusRaw, writer: SerializationWriter) : void {
        serializeManagedAppStatus(writer, managedAppStatusRaw)
        writer.writeObjectValue<Json>("content", managedAppStatusRaw.content, serializeJson);
}
