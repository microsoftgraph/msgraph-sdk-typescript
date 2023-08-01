import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createTaskDefinitionFromDiscriminatorValue} from './createTaskDefinitionFromDiscriminatorValue';
import {serializeTaskDefinition} from './serializeTaskDefinition';
import type {TaskDefinition} from './taskDefinition';
import type {TaskDefinitionCollectionResponse} from './taskDefinitionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskDefinitionCollectionResponse(taskDefinitionCollectionResponse: TaskDefinitionCollectionResponse | undefined = {} as TaskDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(taskDefinitionCollectionResponse),
        "value": n => { taskDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<TaskDefinition>(createTaskDefinitionFromDiscriminatorValue); },
    }
}
