import { deserializeIntoTeamSummary } from './deserializeIntoTeamSummary';
import { type TeamSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamSummary;
}
