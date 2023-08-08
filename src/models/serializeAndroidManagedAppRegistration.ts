import type {AndroidManagedAppRegistration} from './androidManagedAppRegistration';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppRegistration(writer: SerializationWriter, androidManagedAppRegistration: AndroidManagedAppRegistration | undefined = {} as AndroidManagedAppRegistration) : void {
        serializeManagedAppRegistration(writer, androidManagedAppRegistration)
}
