import {AndroidManagedAppRegistration} from './androidManagedAppRegistration';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppRegistration(writer: SerializationWriter, androidManagedAppRegistration: AndroidManagedAppRegistration | undefined = {} as AndroidManagedAppRegistration) : void {
        serializeManagedAppRegistration(writer, androidManagedAppRegistration)
}
