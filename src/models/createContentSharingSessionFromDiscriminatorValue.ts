import {ContentSharingSession} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContentSharingSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContentSharingSession {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContentSharingSession();
}
