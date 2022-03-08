import {UploadSession} from './uploadSession';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : UploadSession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UploadSession();
}
