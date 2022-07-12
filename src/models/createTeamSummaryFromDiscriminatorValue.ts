import {TeamSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamSummary();
}
