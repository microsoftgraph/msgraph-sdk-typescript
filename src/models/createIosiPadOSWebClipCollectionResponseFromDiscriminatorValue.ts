import {IosiPadOSWebClipCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosiPadOSWebClipCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosiPadOSWebClipCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosiPadOSWebClipCollectionResponse();
}
