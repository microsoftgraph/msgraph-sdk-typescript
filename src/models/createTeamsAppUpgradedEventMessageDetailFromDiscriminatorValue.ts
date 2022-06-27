import {TeamsAppUpgradedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppUpgradedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppUpgradedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppUpgradedEventMessageDetailImpl();
}
