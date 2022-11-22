import {WindowsMobileMSICollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsMobileMSICollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsMobileMSICollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsMobileMSICollectionResponse();
}
