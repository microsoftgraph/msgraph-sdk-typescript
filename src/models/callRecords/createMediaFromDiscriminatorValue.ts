import {MediaImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaImpl();
}
