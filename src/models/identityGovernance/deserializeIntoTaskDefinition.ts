import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { createParameterFromDiscriminatorValue } from './createParameterFromDiscriminatorValue';
import { LifecycleTaskCategory } from './lifecycleTaskCategory';
import { type Parameter } from './parameter';
import { serializeParameter } from './serializeParameter';
import { type TaskDefinition } from './taskDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskDefinition(taskDefinition: TaskDefinition | undefined = {} as TaskDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(taskDefinition),
        "category": n => { taskDefinition.category = n.getCollectionOfEnumValues<LifecycleTaskCategory>(LifecycleTaskCategory); },
        "continueOnError": n => { taskDefinition.continueOnError = n.getBooleanValue(); },
        "description": n => { taskDefinition.description = n.getStringValue(); },
        "displayName": n => { taskDefinition.displayName = n.getStringValue(); },
        "parameters": n => { taskDefinition.parameters = n.getCollectionOfObjectValues<Parameter>(createParameterFromDiscriminatorValue); },
        "version": n => { taskDefinition.version = n.getNumberValue(); },
    }
}
