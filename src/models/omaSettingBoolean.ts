import {OmaSetting} from './omaSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingBoolean extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: boolean | undefined;
}
