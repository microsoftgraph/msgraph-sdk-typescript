import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Phone extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The language property */
    language?: string | undefined;
    /** The phone number. */
    number?: string | undefined;
    /** The region property */
    region?: string | undefined;
    /** The type of phone number. Possible values are: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio. */
    type?: PhoneType | undefined;
}
