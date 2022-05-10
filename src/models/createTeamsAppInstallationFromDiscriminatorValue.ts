import {TeamsAppInstallationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppInstallationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppInstallationImpl();
}
