import { createPresenceStatusMessageFromDiscriminatorValue } from '../../../models/createPresenceStatusMessageFromDiscriminatorValue';
import { type PresenceStatusMessage } from '../../../models/presenceStatusMessage';
import { serializePresenceStatusMessage } from '../../../models/serializePresenceStatusMessage';
import { type SetStatusMessagePostRequestBody } from './setStatusMessagePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetStatusMessagePostRequestBody(setStatusMessagePostRequestBody: SetStatusMessagePostRequestBody | undefined = {} as SetStatusMessagePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "statusMessage": n => { setStatusMessagePostRequestBody.statusMessage = n.getObjectValue<PresenceStatusMessage>(createPresenceStatusMessageFromDiscriminatorValue); },
    }
}
