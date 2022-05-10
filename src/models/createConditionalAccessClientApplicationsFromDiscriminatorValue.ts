import {ConditionalAccessClientApplicationsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessClientApplicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessClientApplicationsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessClientApplicationsImpl();
}
