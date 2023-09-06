import { type OmaSetting } from './omaSetting';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OmaSettingBase64 extends OmaSetting, Parsable {
    /**
     * File name associated with the Value property (.cer
     */
    fileName?: string | undefined;
    /**
     * Value. (Base64 encoded string)
     */
    value?: string | undefined;
}
