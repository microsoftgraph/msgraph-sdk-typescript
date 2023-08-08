import type {OnenotePatchContentCommand} from '../../../../../../models/onenotePatchContentCommand';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePatchContentPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The commands property
     */
    commands?: OnenotePatchContentCommand[] | undefined;
}
