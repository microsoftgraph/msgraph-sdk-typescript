import {AndroidManagedAppRegistration} from './androidManagedAppRegistration';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppRegistration(androidManagedAppRegistration: AndroidManagedAppRegistration | undefined = {} as AndroidManagedAppRegistration, writer: SerializationWriter) : void {
        serializeManagedAppRegistration(writer, androidManagedAppRegistration)
}
