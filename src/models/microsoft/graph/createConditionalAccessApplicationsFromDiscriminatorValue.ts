import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessApplicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessApplications {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessApplications();
}
