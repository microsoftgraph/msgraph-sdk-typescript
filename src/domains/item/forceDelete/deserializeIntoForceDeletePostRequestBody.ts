import { type ForceDeletePostRequestBody } from './forceDeletePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoForceDeletePostRequestBody(forceDeletePostRequestBody: ForceDeletePostRequestBody | undefined = {} as ForceDeletePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "disableUserAccounts": n => { forceDeletePostRequestBody.disableUserAccounts = n.getBooleanValue(); },
    }
}
