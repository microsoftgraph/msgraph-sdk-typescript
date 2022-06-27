import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {PersistentBrowserSessionMode} from './persistentBrowserSessionMode';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PersistentBrowserSessionControl extends Partial<AdditionalDataHolder>, ConditionalAccessSessionControl, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Possible values are: always, never. */
    mode?: PersistentBrowserSessionMode | undefined;
}
