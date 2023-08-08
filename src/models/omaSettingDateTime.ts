import type {OmaSetting} from './omaSetting';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingDateTime extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: Date | undefined;
}
