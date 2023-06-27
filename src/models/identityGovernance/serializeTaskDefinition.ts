import {serializeEntity} from '../serializeEntity';
import {LifecycleTaskCategory} from './lifecycleTaskCategory';
import {Parameter} from './parameter';
import {serializeParameter} from './serializeParameter';
import {TaskDefinition} from './taskDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskDefinition(writer: SerializationWriter, taskDefinition: TaskDefinition | undefined = {} as TaskDefinition) : void {
        serializeEntity(writer, taskDefinition)
        writer.writeEnumValue<LifecycleTaskCategory>("category", taskDefinition.category);
        writer.writeBooleanValue("continueOnError", taskDefinition.continueOnError);
        writer.writeStringValue("description", taskDefinition.description);
        writer.writeStringValue("displayName", taskDefinition.displayName);
        writer.writeCollectionOfObjectValues<Parameter>("parameters", taskDefinition.parameters, serializeParameter);
        writer.writeNumberValue("version", taskDefinition.version);
}
