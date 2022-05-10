import {TimeOffImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffImpl();
}
