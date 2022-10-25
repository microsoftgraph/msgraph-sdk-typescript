import {MacOSOfficeSuiteAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSOfficeSuiteAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSOfficeSuiteAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSOfficeSuiteAppCollectionResponse();
}
