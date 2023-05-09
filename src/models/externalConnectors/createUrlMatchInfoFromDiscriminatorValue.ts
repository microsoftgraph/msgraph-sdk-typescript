import {deserializeIntoUrlMatchInfo} from './deserializeIntoUrlMatchInfo';
import {UrlMatchInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlMatchInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUrlMatchInfo;
}
