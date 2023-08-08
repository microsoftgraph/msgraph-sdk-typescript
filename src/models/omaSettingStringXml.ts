import type {OmaSetting} from './omaSetting';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingStringXml extends OmaSetting, Parsable {
    /**
     * File name associated with the Value property (.xml).
     */
    fileName?: string | undefined;
    /**
     * Value. (UTF8 encoded byte array)
     */
    value?: string | undefined;
}
