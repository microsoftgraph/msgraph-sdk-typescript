import {ResourceOperation} from './resourceOperation';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceOperation(writer: SerializationWriter, resourceOperation: ResourceOperation | undefined = {} as ResourceOperation) : void {
        serializeEntity(writer, resourceOperation)
        writer.writeStringValue("actionName", resourceOperation.actionName);
        writer.writeStringValue("description", resourceOperation.description);
        writer.writeStringValue("resourceName", resourceOperation.resourceName);
}
