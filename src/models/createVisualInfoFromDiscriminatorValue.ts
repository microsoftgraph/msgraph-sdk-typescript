import { deserializeIntoVisualInfo } from './deserializeIntoVisualInfo';
import { type VisualInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVisualInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVisualInfo;
}
