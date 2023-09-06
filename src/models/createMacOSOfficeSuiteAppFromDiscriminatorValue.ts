import { deserializeIntoMacOSOfficeSuiteApp } from './deserializeIntoMacOSOfficeSuiteApp';
import { type MacOSOfficeSuiteApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSOfficeSuiteAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSOfficeSuiteApp;
}
