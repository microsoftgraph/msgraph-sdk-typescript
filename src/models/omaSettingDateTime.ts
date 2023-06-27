import {OmaSetting} from './omaSetting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingDateTime extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: Date | undefined;
}
