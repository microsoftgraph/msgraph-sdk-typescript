import { deserializeIntoResourceVisualization } from './deserializeIntoResourceVisualization';
import { type ResourceVisualization } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceVisualizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceVisualization;
}
