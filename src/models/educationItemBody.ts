import {BodyType} from './bodyType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationItemBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The content property
     */
    content?: string | undefined;
    /**
     * The contentType property
     */
    contentType?: BodyType | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
