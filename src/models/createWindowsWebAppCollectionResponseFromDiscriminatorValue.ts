import {WindowsWebAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsWebAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsWebAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsWebAppCollectionResponse();
}
