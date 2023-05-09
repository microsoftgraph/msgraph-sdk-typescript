import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {deserializeIntoLongRunningOperation} from './deserializeIntoLongRunningOperation';
import {PublicError} from './publicError';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {serializePublicError} from './serializePublicError';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRichLongRunningOperation(richLongRunningOperation: RichLongRunningOperation | undefined = {} as RichLongRunningOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoLongRunningOperation(richLongRunningOperation),
        "error": n => { richLongRunningOperation.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "percentageComplete": n => { richLongRunningOperation.percentageComplete = n.getNumberValue(); },
        "resourceId": n => { richLongRunningOperation.resourceId = n.getStringValue(); },
        "type": n => { richLongRunningOperation.type = n.getStringValue(); },
    }
}
