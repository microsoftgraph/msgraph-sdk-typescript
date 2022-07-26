import {TeamsAppUpgradedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppUpgradedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppUpgradedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppUpgradedEventMessageDetail();
}
