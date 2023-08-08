import type {KeyValuePair} from './keyValuePair';
import type {ManagedAppPolicy} from './managedAppPolicy';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppConfiguration extends ManagedAppPolicy, Parsable {
    /**
     * A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service
     */
    customSettings?: KeyValuePair[] | undefined;
}
