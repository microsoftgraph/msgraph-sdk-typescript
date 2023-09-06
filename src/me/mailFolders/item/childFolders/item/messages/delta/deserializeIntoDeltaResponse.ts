import { createMessageFromDiscriminatorValue } from '../../../../../../../models/createMessageFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import { type Message } from '../../../../../../../models/message';
import { serializeMessage } from '../../../../../../../models/serializeMessage';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<Message>(createMessageFromDiscriminatorValue); },
    }
}
