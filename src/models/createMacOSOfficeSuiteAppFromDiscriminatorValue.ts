import {MacOSOfficeSuiteApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSOfficeSuiteAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSOfficeSuiteApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSOfficeSuiteApp();
}
