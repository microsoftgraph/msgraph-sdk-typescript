import {MediaInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaInfo();
}
