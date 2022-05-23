import {ConditionalAccessDevicesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessDevicesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessDevicesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessDevicesImpl();
}
