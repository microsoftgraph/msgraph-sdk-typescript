import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';

export interface PersistentBrowserSessionControl extends ConditionalAccessSessionControl{
    /** Possible values are: always, never. */
    mode?:PersistentBrowserSessionMode | undefined;
}
