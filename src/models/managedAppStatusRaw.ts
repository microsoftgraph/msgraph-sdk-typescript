import { type Json } from './json';
import { type ManagedAppStatus } from './managedAppStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusRaw extends ManagedAppStatus, Parsable {
    /**
     * Status report content.
     */
    content?: Json | undefined;
}
