import {ConditionalAccessApplicationsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessApplicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessApplicationsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessApplicationsImpl();
}
