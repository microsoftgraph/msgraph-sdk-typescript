import {createMainErrorFromDiscriminatorValue} from './createMainErrorFromDiscriminatorValue';
import type {MainError} from './mainError';
import type {ODataError} from './oDataError';
import {serializeMainError} from './serializeMainError';
import {ApiError} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoODataError(oDataError: ODataError | undefined = {} as ODataError) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { oDataError.errorEscaped = n.getObjectValue<MainError>(createMainErrorFromDiscriminatorValue); },
    }
}
