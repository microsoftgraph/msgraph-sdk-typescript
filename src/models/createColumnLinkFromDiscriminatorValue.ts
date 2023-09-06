import { deserializeIntoColumnLink } from './deserializeIntoColumnLink';
import { type ColumnLink } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createColumnLinkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoColumnLink;
}
