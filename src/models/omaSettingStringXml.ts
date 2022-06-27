import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingStringXml extends Partial<AdditionalDataHolder>, OmaSetting, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** File name associated with the Value property (.xml). */
    fileName?: string | undefined;
    /** Value. (UTF8 encoded byte array) */
    value?: string | undefined;
}
