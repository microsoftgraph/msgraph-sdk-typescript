import { deserializeIntoMacOSIncludedApp } from './deserializeIntoMacOSIncludedApp';
import { type MacOSIncludedApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSIncludedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSIncludedApp;
}
