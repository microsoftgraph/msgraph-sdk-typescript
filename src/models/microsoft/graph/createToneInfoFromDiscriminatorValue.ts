import {ToneInfo} from './toneInfo';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createToneInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ToneInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ToneInfo();
}
