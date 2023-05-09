import {AndroidManagedAppRegistration} from './androidManagedAppRegistration';
import {deserializeIntoManagedAppRegistration} from './deserializeIntoManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidManagedAppRegistration(androidManagedAppRegistration: AndroidManagedAppRegistration | undefined = {} as AndroidManagedAppRegistration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppRegistration(androidManagedAppRegistration),
    }
}
