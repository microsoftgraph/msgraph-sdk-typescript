import { deserializeIntoLocalizedDescription } from './deserializeIntoLocalizedDescription';
import { type LocalizedDescription } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLocalizedDescriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLocalizedDescription;
}
