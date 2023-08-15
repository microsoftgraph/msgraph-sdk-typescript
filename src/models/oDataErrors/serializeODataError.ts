import type {MainError} from './mainError';
import type {ODataError} from './oDataError';
import {serializeMainError} from './serializeMainError';
import {ApiError} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeODataError(writer: SerializationWriter, oDataError: ODataError | undefined = {} as ODataError) : void {
        writer.writeObjectValue<MainError>("error", oDataError.errorEscaped, serializeMainError);
        writer.writeAdditionalData(oDataError.additionalData);
}
