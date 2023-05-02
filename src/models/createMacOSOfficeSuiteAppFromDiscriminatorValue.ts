import {deserializeIntoMacOSOfficeSuiteApp} from './deserializeIntoMacOSOfficeSuiteApp';
import {MacOSOfficeSuiteApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSOfficeSuiteAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSOfficeSuiteApp;
}
