import {WindowsMicrosoftEdgeAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMicrosoftEdgeAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsMicrosoftEdgeAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsMicrosoftEdgeAppCollectionResponse();
}
