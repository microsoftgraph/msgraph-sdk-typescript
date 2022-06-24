import {MacOSOfficeSuiteAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSOfficeSuiteAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSOfficeSuiteAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSOfficeSuiteAppImpl();
}
