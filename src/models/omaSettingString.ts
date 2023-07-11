import {OmaSetting} from './omaSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingString extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: string | undefined;
}
