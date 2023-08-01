import type {ForceDeletePostRequestBody} from './forceDeletePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoForceDeletePostRequestBody(forceDeletePostRequestBody: ForceDeletePostRequestBody | undefined = {} as ForceDeletePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "disableUserAccounts": n => { forceDeletePostRequestBody.disableUserAccounts = n.getBooleanValue(); },
    }
}
