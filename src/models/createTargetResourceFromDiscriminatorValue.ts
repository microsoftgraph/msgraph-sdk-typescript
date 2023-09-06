import { deserializeIntoTargetResource } from './deserializeIntoTargetResource';
import { type TargetResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTargetResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTargetResource;
}
