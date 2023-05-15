import {deserializeIntoMediaInfo} from './deserializeIntoMediaInfo';
import {MediaInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMediaInfo;
}
