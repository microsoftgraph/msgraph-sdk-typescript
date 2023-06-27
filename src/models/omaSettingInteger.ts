import {OmaSetting} from './omaSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingInteger extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: number | undefined;
}
