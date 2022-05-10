import {TeamsTabConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsTabConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsTabConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsTabConfigurationImpl();
}
