import { deserializeIntoManagedAppRegistration } from './deserializeIntoManagedAppRegistration';
import { type IosManagedAppRegistration } from './iosManagedAppRegistration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppRegistration(iosManagedAppRegistration: IosManagedAppRegistration | undefined = {} as IosManagedAppRegistration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppRegistration(iosManagedAppRegistration),
    }
}
