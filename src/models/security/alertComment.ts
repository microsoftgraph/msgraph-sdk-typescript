import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertComment extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The comment text.
     */
    comment?: string | undefined;
    /**
     * The person or app name that submitted the comment.
     */
    createdByDisplayName?: string | undefined;
    /**
     * The time when the comment was submitted.
     */
    createdDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
