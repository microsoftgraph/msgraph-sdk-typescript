import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersistentBrowserSessionControl extends ConditionalAccessSessionControl, Partial<Parsable> {
    /** Possible values are: always, never. */
    mode?: PersistentBrowserSessionMode | undefined;
}
