import { deserializeIntoConditionalAccessClientApplications } from './deserializeIntoConditionalAccessClientApplications';
import { type ConditionalAccessClientApplications } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessClientApplicationsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessClientApplications;
}
