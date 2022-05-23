import {ToneInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createToneInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ToneInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ToneInfoImpl();
}
