import { createMainErrorFromDiscriminatorValue } from './createMainErrorFromDiscriminatorValue';
import { type MainError } from './mainError';
import { type ODataError } from './oDataError';
import { serializeMainError } from './serializeMainError';
import { type AdditionalDataHolder, type ApiError, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoODataError(oDataError: ODataError | undefined = {} as ODataError) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { oDataError.errorEscaped = n.getObjectValue<MainError>(createMainErrorFromDiscriminatorValue); },
    }
}
