import {OnenotePatchContentCommand} from '../../../../../../../../models/onenotePatchContentCommand';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePatchContentPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The commands property */
    commands?: OnenotePatchContentCommand[] | undefined;
}
