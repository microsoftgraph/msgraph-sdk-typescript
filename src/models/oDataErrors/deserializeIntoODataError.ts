import {createMainErrorFromDiscriminatorValue} from './createMainErrorFromDiscriminatorValue';
import {MainError} from './mainError';
import {ODataError} from './oDataError';
import {serializeMainError} from './serializeMainError';
import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoODataError(oDataError: ODataError | undefined = {} as ODataError) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { oDataError.errorEscaped = n.getObjectValue<MainError>(createMainErrorFromDiscriminatorValue); },
    }
}
