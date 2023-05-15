import {OnenoteOperation} from './onenoteOperation';
import {OnenoteOperationError} from './onenoteOperationError';
import {serializeOnenoteOperationError} from './serializeOnenoteOperationError';
import {serializeOperation} from './serializeOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteOperation(writer: SerializationWriter, onenoteOperation: OnenoteOperation | undefined = {} as OnenoteOperation) : void {
        serializeOperation(writer, onenoteOperation)
        writer.writeObjectValue<OnenoteOperationError>("error", onenoteOperation.errorEscaped, serializeOnenoteOperationError);
        writer.writeStringValue("percentComplete", onenoteOperation.percentComplete);
        writer.writeStringValue("resourceId", onenoteOperation.resourceId);
        writer.writeStringValue("resourceLocation", onenoteOperation.resourceLocation);
}
