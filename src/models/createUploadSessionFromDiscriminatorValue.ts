import {deserializeIntoUploadSession} from './deserializeIntoUploadSession';
import {UploadSession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUploadSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUploadSession;
}
