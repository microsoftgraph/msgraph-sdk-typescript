import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsAppInstallation} from './serializeTeamsAppInstallation';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsAppInstallationCollectionResponse} from './teamsAppInstallationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppInstallationCollectionResponse(writer: SerializationWriter, teamsAppInstallationCollectionResponse: TeamsAppInstallationCollectionResponse | undefined = {} as TeamsAppInstallationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAppInstallationCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsAppInstallation>("value", teamsAppInstallationCollectionResponse.value, serializeTeamsAppInstallation);
}
