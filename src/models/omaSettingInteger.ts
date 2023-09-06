import { type OmaSetting } from './omaSetting';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OmaSettingInteger extends OmaSetting, Parsable {
    /**
     * Value.
     */
    value?: number | undefined;
}
