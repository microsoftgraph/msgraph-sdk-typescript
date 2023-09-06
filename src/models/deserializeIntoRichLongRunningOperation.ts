import { createPublicErrorFromDiscriminatorValue } from './createPublicErrorFromDiscriminatorValue';
import { deserializeIntoLongRunningOperation } from './deserializeIntoLongRunningOperation';
import { type PublicError } from './publicError';
import { type RichLongRunningOperation } from './richLongRunningOperation';
import { serializePublicError } from './serializePublicError';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRichLongRunningOperation(richLongRunningOperation: RichLongRunningOperation | undefined = {} as RichLongRunningOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLongRunningOperation(richLongRunningOperation),
        "error": n => { richLongRunningOperation.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "percentageComplete": n => { richLongRunningOperation.percentageComplete = n.getNumberValue(); },
        "resourceId": n => { richLongRunningOperation.resourceId = n.getStringValue(); },
        "type": n => { richLongRunningOperation.type = n.getStringValue(); },
    }
}
