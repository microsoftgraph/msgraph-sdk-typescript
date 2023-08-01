import type {CreateSessionPostRequestBody} from './createSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateSessionPostRequestBody(createSessionPostRequestBody: CreateSessionPostRequestBody | undefined = {} as CreateSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "persistChanges": n => { createSessionPostRequestBody.persistChanges = n.getBooleanValue(); },
    }
}
