import {WindowsUniversalAppXContainedAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXContainedAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUniversalAppXContainedAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUniversalAppXContainedAppCollectionResponse();
}
