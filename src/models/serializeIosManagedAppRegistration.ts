import {IosManagedAppRegistration} from './iosManagedAppRegistration';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppRegistration(iosManagedAppRegistration: IosManagedAppRegistration | undefined = {} as IosManagedAppRegistration, writer: SerializationWriter) : void {
        serializeManagedAppRegistration(writer, iosManagedAppRegistration)
}
