import {deserializeIntoConditionalAccessApplications} from './deserializeIntoConditionalAccessApplications';
import {ConditionalAccessApplications} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessApplicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessApplications;
}
