import {OmaSetting} from './omaSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingFloatingPoint extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: number | undefined;
}
