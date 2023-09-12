import { deserializeIntoChoiceColumn } from './deserializeIntoChoiceColumn';
import { type ChoiceColumn } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChoiceColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChoiceColumn;
}
