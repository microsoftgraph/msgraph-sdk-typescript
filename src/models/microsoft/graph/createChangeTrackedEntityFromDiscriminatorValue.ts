import {ChangeTrackedEntity} from './changeTrackedEntity';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeTrackedEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeTrackedEntity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeTrackedEntity();
}
