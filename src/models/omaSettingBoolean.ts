import { type OmaSetting } from './omaSetting';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OmaSettingBoolean extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: boolean | undefined;
}
