import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {IosManagedAppRegistration} from './iosManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosManagedAppRegistration(iosManagedAppRegistration: IosManagedAppRegistration | undefined = {} as IosManagedAppRegistration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppRegistration(iosManagedAppRegistration),
    }
}
