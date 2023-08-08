import type {OmaSetting} from './omaSetting';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingString extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: string | undefined;
}
