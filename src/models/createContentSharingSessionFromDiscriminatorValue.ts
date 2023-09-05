import { deserializeIntoContentSharingSession } from './deserializeIntoContentSharingSession';
import { type ContentSharingSession } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContentSharingSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentSharingSession;
}
