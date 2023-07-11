import {Json} from './json';
import {ManagedAppStatus} from './managedAppStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusRaw extends ManagedAppStatus, Parsable {
    /**
     * Status report content.
     */
    content?: Json | undefined;
}
