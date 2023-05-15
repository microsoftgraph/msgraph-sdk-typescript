import {IosManagedAppRegistration} from './iosManagedAppRegistration';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppRegistration(writer: SerializationWriter, iosManagedAppRegistration: IosManagedAppRegistration | undefined = {} as IosManagedAppRegistration) : void {
        serializeManagedAppRegistration(writer, iosManagedAppRegistration)
}
