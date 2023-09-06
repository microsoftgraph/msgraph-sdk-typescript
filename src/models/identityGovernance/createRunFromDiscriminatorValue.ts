import { deserializeIntoRun } from './deserializeIntoRun';
import { type Run } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRunFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRun;
}
