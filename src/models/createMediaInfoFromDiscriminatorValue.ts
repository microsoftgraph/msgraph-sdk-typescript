import { deserializeIntoMediaInfo } from './deserializeIntoMediaInfo';
import { type MediaInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMediaInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaInfo;
}
