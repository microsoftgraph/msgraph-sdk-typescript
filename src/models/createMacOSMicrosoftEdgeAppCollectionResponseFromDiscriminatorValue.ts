import {MacOSMicrosoftEdgeAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSMicrosoftEdgeAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSMicrosoftEdgeAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSMicrosoftEdgeAppCollectionResponse();
}
