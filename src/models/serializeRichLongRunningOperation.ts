import type {PublicError} from './publicError';
import type {RichLongRunningOperation} from './richLongRunningOperation';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {serializePublicError} from './serializePublicError';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRichLongRunningOperation(writer: SerializationWriter, richLongRunningOperation: RichLongRunningOperation | undefined = {} as RichLongRunningOperation) : void {
        serializeLongRunningOperation(writer, richLongRunningOperation)
        writer.writeObjectValue<PublicError>("error", richLongRunningOperation.errorEscaped, serializePublicError);
        writer.writeNumberValue("percentageComplete", richLongRunningOperation.percentageComplete);
        writer.writeStringValue("resourceId", richLongRunningOperation.resourceId);
        writer.writeStringValue("type", richLongRunningOperation.type);
}
