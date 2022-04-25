import {ConditionalAccessClientApplications} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessClientApplicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessClientApplications {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessClientApplications();
}
