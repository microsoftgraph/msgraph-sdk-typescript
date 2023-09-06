import { type IosManagedAppRegistration } from './iosManagedAppRegistration';
import { serializeManagedAppRegistration } from './serializeManagedAppRegistration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppRegistration(writer: SerializationWriter, iosManagedAppRegistration: IosManagedAppRegistration | undefined = {} as IosManagedAppRegistration) : void {
        serializeManagedAppRegistration(writer, iosManagedAppRegistration)
}
