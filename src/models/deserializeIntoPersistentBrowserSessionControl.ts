import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import type {PersistentBrowserSessionControl} from './persistentBrowserSessionControl';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersistentBrowserSessionControl(persistentBrowserSessionControl: PersistentBrowserSessionControl | undefined = {} as PersistentBrowserSessionControl) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(persistentBrowserSessionControl),
        "mode": n => { persistentBrowserSessionControl.mode = n.getEnumValue<PersistentBrowserSessionMode>(PersistentBrowserSessionMode); },
    }
}
