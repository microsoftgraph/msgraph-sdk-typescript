import {deserializeIntoToneInfo} from './deserializeIntoToneInfo';
import {ToneInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createToneInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoToneInfo;
}
