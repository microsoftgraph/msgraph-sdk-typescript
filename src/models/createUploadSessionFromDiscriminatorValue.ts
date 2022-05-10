import {UploadSessionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : UploadSessionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UploadSessionImpl();
}
