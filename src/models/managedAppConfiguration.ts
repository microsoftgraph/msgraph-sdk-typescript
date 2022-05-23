import {KeyValuePair} from './keyValuePair';
import {ManagedAppPolicy} from './managedAppPolicy';

export interface ManagedAppConfiguration extends ManagedAppPolicy{
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service */
    customSettings?:KeyValuePair[] | undefined;
}
