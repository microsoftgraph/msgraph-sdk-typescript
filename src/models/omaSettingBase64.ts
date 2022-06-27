import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingBase64 extends Partial<AdditionalDataHolder>, OmaSetting, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** File name associated with the Value property (.cer */
    fileName?: string | undefined;
    /** Value. (Base64 encoded string) */
    value?: string | undefined;
}
