import { deserializeIntoOpenTypeExtension } from './deserializeIntoOpenTypeExtension';
import { type OpenTypeExtension } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOpenTypeExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenTypeExtension;
}
