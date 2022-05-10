import {ChangeTrackedEntityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeTrackedEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeTrackedEntityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangeTrackedEntityImpl();
}
