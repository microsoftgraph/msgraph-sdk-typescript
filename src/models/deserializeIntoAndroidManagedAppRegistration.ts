import { type AndroidManagedAppRegistration } from './androidManagedAppRegistration';
import { deserializeIntoManagedAppRegistration } from './deserializeIntoManagedAppRegistration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppRegistration(androidManagedAppRegistration: AndroidManagedAppRegistration | undefined = {} as AndroidManagedAppRegistration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppRegistration(androidManagedAppRegistration),
    }
}
