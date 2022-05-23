import {TeamsAppInstallationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppInstallationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppInstallationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppInstallationCollectionResponseImpl();
}
