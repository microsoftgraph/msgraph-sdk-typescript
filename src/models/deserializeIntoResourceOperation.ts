import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ResourceOperation } from './resourceOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceOperation(resourceOperation: ResourceOperation | undefined = {} as ResourceOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(resourceOperation),
        "actionName": n => { resourceOperation.actionName = n.getStringValue(); },
        "description": n => { resourceOperation.description = n.getStringValue(); },
        "resourceName": n => { resourceOperation.resourceName = n.getStringValue(); },
    }
}
