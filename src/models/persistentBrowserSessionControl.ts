import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersistentBrowserSessionControl extends ConditionalAccessSessionControl, Parsable {
    /**
     * Possible values are: always, never.
     */
    mode?: PersistentBrowserSessionMode | undefined;
}
