import {Privacy} from './privacy';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivacyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Privacy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Privacy();
}
