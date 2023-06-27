import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DataSubject extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Email of the data subject.
     */
    email?: string | undefined;
    /**
     * First name of the data subject.
     */
    firstName?: string | undefined;
    /**
     * Last Name of the data subject.
     */
    lastName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The country/region of residency. The residency information is uesed only for internal reporting but not for the content search.
     */
    residency?: string | undefined;
}
