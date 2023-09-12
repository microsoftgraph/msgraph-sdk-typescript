import { deserializeIntoMacOSDmgApp } from './deserializeIntoMacOSDmgApp';
import { type MacOSDmgApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSDmgAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSDmgApp;
}
